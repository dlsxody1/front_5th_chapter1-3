/* eslint-disable @typescript-eslint/no-unused-vars */
import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  // eslint-disable-next-line prettier/prettier
  _equals = shallowEquals
): T {
  //이전값, 의존성배열, 결과를 저장할 ref (렌더링 사이에 값을 유지하기 위함.)
  const ref = useRef<{
    deps: DependencyList | null;
    value: T | null;
    initialized: boolean;
  }>({
    deps: null,
    value: null,
    initialized: false,
  });

  //처음에는 무조건 팩토리 함수를 실행 의존성이 변경될 경우
  const depsChanged =
    !ref.current.initialized ||
    !_equals(_deps, ref.current.deps as DependencyList);

  if (depsChanged) {
    // 팩토리 함수를 실행하여 새 값 계산
    ref.current.value = factory();
    ref.current.deps = _deps;
    ref.current.initialized = true;
  }

  return ref.current.value as T;
}
