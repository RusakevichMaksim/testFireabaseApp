import React from "react";
import "./App.css";
import { RouterProvider, AuthContextProvider } from "./context/index";
import { firebase } from "./firebase/index";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider />
    </AuthContextProvider>
  );
}

export default App;
