import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops, wrong way!</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
