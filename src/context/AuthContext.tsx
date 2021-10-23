import React, { useContext, useEffect, useState } from "react";
import { handleOnAuthStateChanged } from "../firebase";

type ContextProps = {
  isAuth: any;
};
export const AuthContext = React.createContext<ContextProps>({
  isAuth: false,
});

export function useAuthContext() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return authContext;
}

type AuthContextProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProps) {
  const [currentUset, setCurrentUser] = useState(null);

  useEffect(() => {
    handleOnAuthStateChanged();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth: currentUset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
