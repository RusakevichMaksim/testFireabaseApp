import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  button: {
    background: "#294050",
    width: "200px",
    height: "52px",
    border: "none",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#FFFFFF",
    "&:active": {
      background: "#494050",
    },
  },
  singOut: {
    background: "#446b85",
    width: "90px",
    height: "52px",
    border: "none",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#FFFFFF",
    borderRadius: "15px",
    "&:active": {
      background: "#6446b85",
    },
  },
});
