/* eslint-disable no-useless-computed-key */
import { makeStyles } from "@material-ui/core/styles";

const letf = 55;

const enpd1024 = "1024px";

export default makeStyles({
  wrapperOuter: {
    display: "flex",
    height: "100vh",
    [`@media (max-width:${enpd1024})`]: {
      flexWrap: "wrap",
    },
  },
  wrapperInner: {
    display: "flex",
    width: `${letf}%`,

    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    marginLeft: "100px",
    [`@media (max-width:${enpd1024})`]: {
      width: "100%",
      marginLeft: "0px",
      alignItems: "center",
    },
  },
  wrapperInnerLeft: {
    display: "flex",
    width: `${100 - letf}%`,
    [`@media (max-width:${enpd1024})`]: {
      width: "100%",
    },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "50%",
  },
  titleOne: {
    fontSize: "24px",
    fontStyle: "normal",
    lineHeight: "26px",
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.5)",
    textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  titleTwo: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "54px",
    lineHeight: "66px",
    color: "#294050",
  },
  buttonWrapper: {
    marginTop: "50px",
    [`@media (max-width:${enpd1024})`]: {
      marginTop: "10px",
    },
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
});
