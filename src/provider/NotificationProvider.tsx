/* eslint-disable prettier/prettier */
import React, { ReactNode, useMemo } from "react";
import useNotification from "../@lib/hooks/useNotification";
import NotificationContext from "../context/NotificationContext";

type NotificationProviderProps = {
  children: ReactNode;
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const { addNotification, notifications, removeNotification } =
    useNotification();

  // useMemo로 context 값 메모이제이션
  const value = useMemo(
    () => ({
      addNotification,
      notifications,
      removeNotification,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addNotification, removeNotification, notifications]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
