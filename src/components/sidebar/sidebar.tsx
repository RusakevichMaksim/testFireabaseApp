import useStyles from "./styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { ROUTES } from "../../constant";

export const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.wrapperOuter}>
      <Box>
        <Button
          onClick={() => {
            history.push(ROUTES.home);
          }}
        >
          Home
        </Button>

        <Button
          onClick={() => {
            history.push(ROUTES.pageTwo);
          }}
        >
          Page Two
        </Button>
      </Box>
    </div>
  );
};
