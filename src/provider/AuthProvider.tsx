/* eslint-disable prettier/prettier */
import React, { ReactNode, useMemo } from "react";
import AuthContext from "../context/AuthContext";
import useAuth from "../@lib/hooks/useAuth";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { user, login, logout } = useAuth();

  // useMemo로 context 값 메모이제이션
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),

    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
