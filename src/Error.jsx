import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err); // Changed to console.error for better error logging

  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong.</h2>
      {err && <p>Error: {err.message || JSON.stringify(err)}</p>}
    </div>
  );
};

export default Error;
