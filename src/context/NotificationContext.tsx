import { createContext } from "react";
import { Notification } from "../types/types";

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string, type: string) => void;
  removeNotification: (id: string) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  // eslint-disable-next-line prettier/prettier
  undefined
);

export default NotificationContext;
