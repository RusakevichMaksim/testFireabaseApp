import { makeStyles } from "@material-ui/core/styles";
import { height } from "@mui/system";

export default makeStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  warrerCard: {
    display: "flex",
    width: "200px",
    height: "300px",
    border: "1px solid black",
    margin: "10px",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px",
    backgroundColor: "gray",
    color: "white",
  },
  line: {
    marginTop: "5px",
  },
  button: {
    backgroundColor: "white",
    marginTop: "10px",
  },
  image: {
    minWidth: "200px",
    minHeight: "200px",
  },
});
