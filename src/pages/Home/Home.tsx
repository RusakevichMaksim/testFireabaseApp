import { Layout, HomeFormCard, HomeCard } from "../../components";
import { useFetchData } from "../../hooks/useFetshData";

export const Home = () => {
  const { listData, fetchData } = useFetchData();

  return (
    <Layout>
      <HomeFormCard fetchData={fetchData} listData={listData} />
      <HomeCard listData={listData} />
    </Layout>
  );
};
