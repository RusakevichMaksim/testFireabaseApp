import { useState } from "react";
import { handleCreateUserWithEmailAndPassword } from "../../firebase/index";

export const Login = () => {
  const [userData, setUserData] = useState({ login: "", password: "" });

  const handleChange = (value: string, input: string) => {
    setUserData((prevstate) => ({
      ...prevstate,
      [input]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(userData);
    handleCreateUserWithEmailAndPassword(userData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Login</div>
      <input
        style={{ marginBottom: "10px" }}
        type="email"
        placeholder="Email"
        value={userData.login}
        onChange={(e) => {
          handleChange(e.target.value, "login");
        }}
      />
      <input
        style={{ marginBottom: "10px" }}
        type="text"
        placeholder="password"
        value={userData.password}
        onChange={(e) => {
          handleChange(e.target.value, "password");
        }}
      />
      <button onClick={handleSubmit}>Subbmit</button>
    </div>
  );
};
