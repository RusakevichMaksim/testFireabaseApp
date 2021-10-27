import { Box, Container } from "@material-ui/core";

import useStyles from "./styles";
import { Header } from "../index";

type Props = {
  children: any;
};

export const Layout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <Box display="flex" flexDirection="row">
        <main className={classes.main}>
          <Container>{children}</Container>
        </main>
      </Box>
    </Container>
  );
};
