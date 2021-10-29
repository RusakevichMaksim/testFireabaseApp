import { Box } from "@material-ui/core";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import { ROUTES } from "../../constant";
import { auth } from "../../firebase";
import { useHistory } from "react-router";

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <header className={classes.header}>
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

      <Button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sing Out
      </Button>
    </header>
  );
};
