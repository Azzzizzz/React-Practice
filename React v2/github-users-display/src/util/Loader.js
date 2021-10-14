import React from "react";
import LoaderImg from "../img/loading.gif";
import "./Loader.css";

export default function Loader({ loading }) {
  return (
    <div className="loader">
      {loading === true ? (
        <div>
          <img src={LoaderImg} alt="" />
          <p>Loading...</p>
        </div>
      ) : null}
    </div>
  );
}
