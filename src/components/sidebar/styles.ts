import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  wrapperOuter: {
    minHeight: "calc(100vh - 90px)",
    width: "277px",
    background: "#294050",
    display: "flex",
    justifyContent: "center",
  },
  wrapperInner: {
    display: "flex",
    flexDirection: "column",
    width: "180px",
    marginTop: "30px",
  },
  lineHead: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  lineText: {
    marginLeft: "10px",
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "24px",
    fontStyle: "normal",
    color: "#FFFFFF",
  },
  line: {
    width: "100%",
    marginLeft: "34px",
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "24px",
    fontStyle: "normal",
    color: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
      color: "#FF6625",
    },
  },
});
