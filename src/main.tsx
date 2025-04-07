/* eslint-disable prettier/prettier */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./provider/ThemeProvider";
import { AuthProvider } from "./provider/AuthProvider";
import { NotificationProvider } from "./provider/NotificationProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
