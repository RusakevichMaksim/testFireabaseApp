import { useParams } from "react-router-dom";
import { Layout, Dropzone } from "../../components";
import { Box, TextField, Button } from "@material-ui/core";
import {
  handleSetCollection,
  handleGetDocument,
  handleDeleteDoc,
} from "../../firebase/index";
import { useEffect, useState } from "react";
import { document, ROUTES } from "../../constant/index";
import { useHistory } from "react-router";

export const EditCard = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState({ data1: "", data2: "", imgPath: "" });
  const history = useHistory();

  const handleData = (name: string, value: string) => {
    setData((prevstate) => ({ ...prevstate, [name]: value }));
  };
  const handleSet = () => {
    handleSetCollection(document.home, `${id}`, data).then(() => {
      history.push(ROUTES.home);
    });
  };
  const handleDelete = () => {
    handleDeleteDoc(document.home, `${id}`).then(() => {
      history.push(ROUTES.home);
    });
  };

  useEffect(() => {
    handleGetDocument(document.home, `${id}`).then((e: any) => {
      setData(e.data());
    });
  }, []);

  return (
    <Layout>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Box
          style={{ display: "flex", flexDirection: "column", width: "250px" }}
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
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
            }}
            onClick={handleSet}
          >
            set
          </Button>
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              marginTop: "10px",
            }}
            onClick={handleDelete}
          >
            delete
          </Button>
        </Box>{" "}
      </Box>
    </Layout>
  );
};
