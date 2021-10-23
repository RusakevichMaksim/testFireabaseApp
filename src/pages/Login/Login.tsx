import { useState } from "react";
import {
  handleCreateUserWithEmailAndPassword,
  handleSignInWithEmailAndPassword,
  handleSignInWithPopup,
} from "../../firebase/index";

export const Login = () => {
  const [userData, setUserData] = useState({ login: "", password: "" });
  const [pageState, setPageState] = useState(true);

  const handleChange = (value: string, input: string) => {
    setUserData((prevstate) => ({
      ...prevstate,
      [input]: value,
    }));
  };

  const handleSubmit = () => {
    if (pageState) {
      handleSignInWithEmailAndPassword(userData);
    } else {
      handleCreateUserWithEmailAndPassword(userData);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pageState ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "80vh",
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
          <button style={{ marginTop: "15px" }} onClick={handleSignInWithPopup}>
            Google Login
          </button>
          <button
            style={{ marginTop: "15px" }}
            onClick={() => setPageState(!pageState)}
          >
            CreateUser
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Create User</div>
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
          <button
            style={{ marginTop: "15px" }}
            onClick={() => setPageState(!pageState)}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
