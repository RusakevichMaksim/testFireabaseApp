import { useHistory } from "react-router";
import { ROUTES } from "../../constant";
import { auth } from "../../firebase/index";

export const Home = () => {
  const history = useHistory();
  const buttonStyle = {
    width: "100px",
    height: "50px",
    backgroundColor: "#cb8888",
    border: "none",
    marginTop: "10px",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Home
      <button
        onClick={() => {
          history.push(ROUTES.pageTwo);
        }}
        style={buttonStyle}
      >
        pageTwo
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          auth.signOut();
        }}
      >
        Sing Out
      </button>
    </div>
  );
};
