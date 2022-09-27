import { useHistory } from "react-router-dom";
import { darkModeVar } from "../apollo";

function Admin({ setIsLoggedIn }) {
  const history = useHistory();
  return (
    <div>
      <h1>admin</h1>
      <button onClick={() => darkModeVar(true)}>to dark</button>
      <button onClick={() => darkModeVar(false)}>to light</button>
    </div>
  );
}

export default Admin;
