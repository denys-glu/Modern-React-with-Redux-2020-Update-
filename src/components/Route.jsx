const Route = ({ path, children }) => {
  //in this approach we will do all the requests again, like css, js and fonts. this is not a SPA approach
  return window.location.pathname === path
    ? children
    : null;
}

export default Route
