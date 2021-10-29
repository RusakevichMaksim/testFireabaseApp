import { makeStyles } from "@material-ui/core/styles";
import { height } from "@mui/system";
import { relative } from "path";

export default makeStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  warrerCard: {
    display: "flex",
    width: "309px",
    height: "437px",
    margin: "10px",
    flexDirection: "column",
    color: "white",
    borderRadius: "8px",
    position: "relative",
  },
  lineHead: {
    marginTop: "5px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#FFFFFF",
  },
  line: {
    marginTop: "5px",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "13px",
    lineHeight: "20px",
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "white",
    marginTop: "10px",
  },
  image: {
    width: "309px",
    height: "309px",
    position: "absolute",
    top: 0,
    borderRadius: "8px 8px 0px 0px",
  },
  cardContent: {
    marginTop: "309px",
    height: `calc(437px - 309px)`,
    backgroundColor: "#294050",
    borderRadius: "0px 0px 8px 8px ",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
});
