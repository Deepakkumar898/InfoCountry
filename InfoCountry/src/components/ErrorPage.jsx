import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      {" "}
      <div>{error && error.data}</div>
      <NavLink to="/">Go to Home</NavLink>
    </>
  );
};
