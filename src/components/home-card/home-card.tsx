import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ROUTES } from "../../constant";
import useStyles from "./styles";

type Props = {
  listData: any;
};

export const HomeCard = ({ listData }: Props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      {listData?.map((e: any, index: number) => {
        return (
          <div className={classes.warrerCard} key={index}>
            <div className={classes.line}>{e.data().data1}</div>
            <div className={classes.line}>{e.data().data2}</div>
            <Button
              onClick={() => {
                history.push(ROUTES.editCard + e.id);
              }}
              className={classes.button}
            >
              Edit
            </Button>
          </div>
        );
      })}
    </div>
  );
};
