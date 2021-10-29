import { useState } from "react";
import {
  handleCreateUserWithEmailAndPassword,
  handleSignInWithEmailAndPassword,
  handleSignInWithPopup,
} from "../../firebase/index";
import useStyles from "./styles";
import bannerTop from "../../assets/login-img/frame-3.png";
import bannerBottom from "../../assets/login-img/frame-4.png";
import { Input, Button } from "../../components/index";

export const Login = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState({ login: "", password: "" });
  const [pageState, setPageState] = useState(true);

  const handleChange = (value: string, input: string) => {
    setUserData((prevstate) => ({
      ...prevstate,
      [input]: value,
    }));
  };

  const handleSubmit = () => {
    if (userData.login.length === 0 || userData.password.length === 0) return;
    if (pageState) {
      handleSignInWithEmailAndPassword(userData);
    } else {
      handleCreateUserWithEmailAndPassword(userData);
    }
  };

  return (
    <div className={classes.wrapperOuter}>
      <div className={classes.wrapperInner}>
        <div className={classes.titleOne}>Welcome to</div>
        <div className={classes.titleTwo}>GameStore</div>
        <Input
          value={userData.login}
          onChange={(e: any) => {
            handleChange(e.target.value, "login");
          }}
          placeholder="Email"
          label="Email"
        />
        <Input
          value={userData.password}
          onChange={(e: any) => {
            handleChange(e.target.value, "password");
          }}
          placeholder="Password"
          label="Password"
          style={{ marginTop: "30px" }}
        />
        <div className={classes.buttonWrapper}>
          <Button
            style={{ marginTop: "30px" }}
            onClick={handleSubmit}
            text="Subbmit"
          />
          <Button
            style={{ marginTop: "30px" }}
            onClick={handleSignInWithPopup}
            text="Google Login"
          />
          <Button
            style={{ marginTop: "30px" }}
            onClick={() => setPageState(!pageState)}
            text={pageState ? "Crate Account" : "Sing In"}
          />
        </div>
      </div>
      <div className={classes.wrapperInnerLeft}>
        <img className={classes.image} src={bannerTop} alt="banner" />
        <img className={classes.image} src={bannerBottom} alt="banner" />
      </div>
    </div>
  );
};
