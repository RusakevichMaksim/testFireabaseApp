import { HomeFormCard } from "../../components/index";
import { useFetchData } from "../../hooks/useFetshData";

export const AddCard = () => {
  const { listData, fetchData } = useFetchData();

  return (
    <div>
      <HomeFormCard fetchData={fetchData} listData={listData} />
    </div>
  );
};
