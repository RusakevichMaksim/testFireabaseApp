import { useHistory } from "react-router";
import { ROUTES } from "../../constant";

export const PageTwo = () => {
  const history = useHistory();

  return (
    <div>
      PageTwo
      <button
        onClick={() => {
          history.push(ROUTES.home);
        }}
      >
        go Home
      </button>
    </div>
  );
};
