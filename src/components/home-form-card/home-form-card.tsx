import { useEffect, useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { handleSetCollection, handleUploadFile } from "../../firebase";
import useStyles from "./styles";
import { ROUTES } from "../../constant";

import { document } from "../../constant";
import { Dropzone } from "../dropzone/dropzone";
import { useHistory } from "react-router";

type Props = {
  fetchData: () => {};
  listData: any;
};

export const HomeFormCard = ({ fetchData, listData }: Props) => {
  const classes = useStyles();
  const history = useHistory();

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
      history.push(ROUTES.home);
    });
  };

  return (
    <Box>
      <Box className={classes.wrapper}>
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
    </Box>
  );
};
