import { useEffect, useState } from "react";
import { handleGetCollection } from "../firebase";
import { document } from "../constant";

export const useFetchData = () => {
  const [listData, setListData] = useState<any>();

  async function fetchData() {
    try {
      const doc = await handleGetCollection(document.home);
      setListData(doc.docs);
    } catch (e) {
      console.log("Error getting cached document:", e);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return {
    listData,
    fetchData,
  };
};
