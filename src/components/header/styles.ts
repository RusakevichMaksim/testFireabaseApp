import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#294050",
    height: "90px",
  },
  logo: {
    width: "277px",
    fontSize: "36px",
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: "44px",
    color: "#FFFFFF",
    paddingLeft: "50px",
  },
  headerWrapperInner: {
    width: `calc(100% - 277px)`,
    display: "flex",
    justifyContent: "space-between",
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingRight: "50px",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "16px",
    marginLeft: "30px",
  },
});
