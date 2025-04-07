import { useState } from "react";
import { User } from "../../types/types";
import useNotification from "../../hooks/useNotification";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const { addNotification } = useNotification();

  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  };

  const logout = () => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  };

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
