import { useHistory } from "react-router";

export const PageTwo = () => {
  const history = useHistory();

  return (
    <div>
      PageTwo
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        go Home
      </button>
    </div>
  );
};
