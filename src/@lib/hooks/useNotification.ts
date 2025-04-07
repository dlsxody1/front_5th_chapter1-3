import { useState } from "react";
import { Notification } from "../../types/types";

const useNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const addNotification = (message: string, type: Notification["type"]) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  return { notifications, addNotification, removeNotification };
};

export default useNotification;
