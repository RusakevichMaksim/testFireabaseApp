import useStyles from "./styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { ROUTES } from "../../constant";
import icon from "../../assets/mdi_toc.svg";
import add from "../../assets/mdi_add.svg";

import { useState } from "react";

export const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [onen, setOpen] = useState(true);

  return (
    <div className={classes.wrapperOuter}>
      <div className={classes.wrapperInner}>
        <div
          onClick={() => {
            setOpen(!onen);
          }}
          className={classes.lineHead}
        >
          <img src={icon} alt="icon" />
          <span className={classes.lineText}>Pages</span>
        </div>
        {onen ? (
          <>
            <div
              onClick={() => {
                history.push(ROUTES.home);
              }}
              className={classes.line}
            >
              Home
            </div>
            <div
              onClick={() => {
                history.push(ROUTES.pageTwo);
              }}
              className={classes.line}
            >
              Page Two
            </div>
            <div className={classes.line}>temp</div>
            <div className={classes.line}>temp</div>
            <div className={classes.line}>temp</div>
            <div className={classes.line}>temp</div>
            <div className={classes.line}>temp</div>
          </>
        ) : null}
        <div
          onClick={() => {
            history.push(ROUTES.addCard);
          }}
          className={classes.lineHead}
          style={{ marginTop: "15px" }}
        >
          <img src={add} alt="icon" />
          <span className={classes.lineText}>ADD CARD</span>
        </div>
      </div>
    </div>
  );
};
