import { useEffect, useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { handleSetCollection, handleUploadFile } from "../../firebase";
import useStyles from "./styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { document } from "../../constant";
import { Dropzone } from "../dropzone/dropzone";

type Props = {
  fetchData: () => {};
  listData: any;
};

export const HomeFormCard = ({ fetchData, listData }: Props) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const [data, setData] = useState({ data1: "", data2: "", imgPath: "" });

  const handleData = (name: string, value: string) => {
    setData((prevstate) => ({ ...prevstate, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSet = () => {
    handleSetCollection(
      document.home,
      `${listData.length + 1}+${data.data1}`,
      data
    ).then(() => {
      fetchData();
    });
  };

  return (
    <Box>
      <Box
        style={{ display: checked ? "" : "none" }}
        className={classes.wrapper}
      >
        <img alt="img" src={`${data.imgPath}`} />
        <Dropzone handleData={handleData} />
        <TextField
          onChange={(e) => {
            handleData("data1", e.target.value);
          }}
          id="standard-basic-data1"
          label="data1"
          value={data.data1}
          variant="standard"
        />
        <TextField
          onChange={(e) => {
            handleData("data2", e.target.value);
          }}
          id="standard-basic-data2"
          label="data2"
          value={data.data2}
          variant="standard"
        />
        <Button
          className={classes.button}
          variant="outlined"
          onClick={handleSet}
        >
          add card
        </Button>
      </Box>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show add card"
      />
    </Box>
  );
};
