import React from "react";

export default function Error({ show }) {
  return (
    <>
      {show === true ? (
        <div className="alert alert-danger">
          Something went wrong. Please try again later.
        </div>
      ) : null}
    </>
  );
}
// return (
//    show && (
//      <div className="alert alert-danger">
//        Something went wrong. Please try again later
//      </div>
//    )
//  );
