import { Box, Container } from "@material-ui/core";

import useStyles from "./styles";
import { Header, Sidebar } from "../index";

type Props = {
  children: any;
};

export const Layout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};
