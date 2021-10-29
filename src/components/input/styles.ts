import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  wrapperInput: {},
  input: {
    width: "400px",
    height: "52px",
    backgroundColor: "#FFFFFF",
    "&:focus": {
      outline: "none",
    },
    border: "1px solid rgba(42, 66, 84, 0.2)",
    padding: "20px 16px",
    fontSize: "15px",
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: "18px",
  },
  label: {
    color: "#294050",
    fontSize: "15px",
    fontWeight: 500,
    fontStyle: "normal",
    margin: "5px 0px",
    lineHeight: "18px",
  },
});