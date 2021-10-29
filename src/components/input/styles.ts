import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  wrapperInput: {
    cursor: "pointer",
    display: "flex",
  },
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
  inputSearch: {
    width: "390px",
    height: "52px",
    borderRadius: "16px",
    "&:focus": {
      outline: "none",
    },
    border: "1px solid rgba(42, 66, 84, 0.2)",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "rgba(0, 0, 0, 0.5)",
    paddingLeft: "60px",
  },
  search: {
    position: "fixed",
    marginLeft: "17px",
    marginTop: "14px",
  },
  test: {},
});
