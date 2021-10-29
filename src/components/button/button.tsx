import useStyles from "./styles";

type Props = {
  text: string;
  onClick: () => void;
  style?: any;
  typeButton?: string;
};

export const Button = ({ text, onClick, style, typeButton }: Props) => {
  const classes = useStyles();

  const selectTypeButton = () => {
    switch (typeButton) {
      case "singOut":
        return (
          <button style={style} className={classes.singOut} onClick={onClick}>
            {text}
          </button>
        );

      default:
        return (
          <button style={style} className={classes.button} onClick={onClick}>
            {text}
          </button>
        );
    }
  };

  return selectTypeButton();
};
