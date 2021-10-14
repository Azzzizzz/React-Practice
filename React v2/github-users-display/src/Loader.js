import React from "react";
import LoaderImg from "./img/loading.gif";

export default function Loader({ loading }) {
  return <div>{loading === true ? <img src={LoaderImg} alt="" /> : null}</div>;
}
