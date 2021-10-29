import useStyles from "./styles";

type Props = {
  text: string;
  onClick: () => void;
  style?: any;
};

export const Button = ({ text, onClick, style }: Props) => {
  const classes = useStyles();

  return (
    <button style={style} className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
};
