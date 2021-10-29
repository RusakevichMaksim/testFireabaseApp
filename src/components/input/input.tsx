import useStyles from "./styles";
type Props = {
  value?: string | number;
  onChange: (e: any) => any;
  placeholder?: string;
  label?: string;
  style?: any;
};

export const Input = ({
  value,
  onChange,
  placeholder,
  label,
  style,
}: Props) => {
  const classes = useStyles();

  return (
    <div style={style} className={classes.wrapperInput}>
      <div className={classes.label}>{label}</div>
      <input
        placeholder={placeholder}
        className={classes.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
