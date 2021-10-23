import { useHistory } from "react-router";

export const Home = () => {
  const history = useHistory();
  return (
    <div>
      Home
      <button
        onClick={() => {
          history.push("/pageTwo");
        }}
      >
        pageTwo
      </button>
    </div>
  );
};
