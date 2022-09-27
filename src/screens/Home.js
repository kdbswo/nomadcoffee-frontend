import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { darkModeVar, logUserOut } from "../apollo";

function Home({ setIsLoggedIn }) {
  const history = useHistory();
  return (
    <div>
      <h1>Welcome we did it!</h1>
      <button onClick={() => logUserOut(history)}>Logout Now</button>
      <button onClick={() => darkModeVar(true)}>to dark</button>
      <button onClick={() => darkModeVar(false)}>to light</button>
    </div>
  );
}

export default Home;
