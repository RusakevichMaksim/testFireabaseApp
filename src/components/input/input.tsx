import useStyles from "./styles";
import searcIcon from "../../assets/icons/mdi_search.svg";

type Props = {
  value?: string | number;
  onChange: (e: any) => any;
  placeholder?: string;
  label?: string;
  style?: any;
  typeInput?: string;
  disabled?: boolean;
};

export const Input = ({
  value,
  onChange,
  placeholder,
  label,
  style,
  typeInput,
  disabled,
}: Props) => {
  const classes = useStyles();

  const selectTypeInput = () => {
    switch (typeInput) {
      case "form":
        return (
          <div style={style} className={classes.wrapperInput}>
            <div className={classes.label}>{label}</div>
            <input
              placeholder={placeholder}
              className={classes.input}
              value={value}
              onChange={onChange}
              disabled={disabled}
            />
          </div>
        );
      case "search":
        return (
          <div style={style} className={classes.wrapperInput}>
            <div className={classes.label}>{label}</div>
            <img className={classes.search} src={searcIcon} alt="search" />
            <input
              placeholder={placeholder}
              className={classes.inputSearch}
              value={value}
              onChange={onChange}
              disabled={disabled}
            />
          </div>
        );

      default:
        return (
          <div style={style} className={classes.wrapperDefault}>
            <div className={classes.label}>{label}</div>
            <input
              placeholder={placeholder}
              className={classes.input}
              value={value}
              onChange={onChange}
              disabled={disabled}
            />
          </div>
        );
    }
  };

  return selectTypeInput();
};
