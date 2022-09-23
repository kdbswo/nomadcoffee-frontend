import { isLoggedInvar } from "../apollo";

function Home({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => isLoggedInvar(false)}>Logout Now</button>
    </div>
  );
}

export default Home;
