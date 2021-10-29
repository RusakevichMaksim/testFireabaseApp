import { Box } from "@material-ui/core";
import useStyles from "./styles";
import { ROUTES } from "../../constant";
import { auth } from "../../firebase";
import { useHistory } from "react-router";
import { Input, Button } from "../index";
import avatar from "../../assets/login-img/User.jpg";

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>GStore</div>
      <div className={classes.headerWrapperInner}>
        <Input typeInput="search" placeholder="Search" onChange={() => {}} />
        <div className={classes.avatarWrapper}>
          <Button
            onClick={() => {
              auth.signOut();
            }}
            text="Sing Out"
            typeButton="singOut"
          />

          <img className={classes.avatar} src={avatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};
