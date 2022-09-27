import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "token";
const DARK_MODE = "DARK_MODE";
const ADMIN_MODE = "ADMIN_MODE";
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};
export const logUserOut = (history) => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  history?.replace();
  window.location.reload();
};
export const darkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === "enabled")
);

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "disabled");
  darkModeVar(false);
};
export const adminModeVar = makeVar(
  Boolean(localStorage.getItem(ADMIN_MODE) === "enabled")
);

export const adminIn = () => {
  localStorage.setItem(ADMIN_MODE, "enabled");
  adminModeVar(true);
};
export const adminOut = () => {
  localStorage.setItem(ADMIN_MODE, "disabled");
  adminModeVar(false);
};

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
