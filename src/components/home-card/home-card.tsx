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
        const data = e.data();
        return (
          <div className={classes.warrerCard} key={index}>
            {data.imgPath ? (
              <img
                className={classes.image}
                alt="img"
                src={`${data.imgPath}`}
              />
            ) : null}
            <div className={classes.cardContent}>
              <div className={classes.lineHead}>{data.data1}</div>
              <div className={classes.line}>{data.data2}</div>
              <Button
                onClick={() => {
                  history.push(ROUTES.editCard + e.id);
                }}
                className={classes.button}
              >
                Edit
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
