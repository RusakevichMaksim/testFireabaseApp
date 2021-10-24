import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Box } from "@material-ui/core";
import { handleSetCollection, handleGetCollection } from "../../firebase/index";

export const Home = () => {
  const [data, setData] = useState({ data1: "", data2: "" });
  const [listData, setListData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const doc = await handleGetCollection("test1");
        setListData(doc.docs);
      } catch (e) {
        console.log("Error getting cached document:", e);
      }
    }
    fetchData();
  }, []);

  const handleData = (name: string, value: string) => {
    setData((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleSet = () => {
    handleSetCollection("test1", data.data1, data);
  };

  return (
    <Layout>
      <Box>
        <input
          value={data.data1}
          type="text"
          onChange={(e) => {
            handleData("data1", e.target.value);
          }}
        />
        <input
          value={data.data2}
          type="text"
          onChange={(e) => {
            handleData("data2", e.target.value);
          }}
        />
        <button onClick={handleSet}>set</button>
      </Box>
      <ul>
        {listData?.map((e: any, index: number) => {
          return (
            <li key={index}>
              <div>{e.data().data1}</div>
              <div>{e.data().data2}</div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
