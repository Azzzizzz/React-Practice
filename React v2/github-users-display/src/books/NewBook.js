import React from "react";

export default function NewBook() {
  function onSave() {
    console.log("Saving");
  }

  return (
    <>
      <div className="container ">
        <div className="col-6">
          <h1>Add New Book</h1>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Book Name</label>
              <input
                type="email"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter a Book Name"
              />
            </div>
            <div className="form-group mt-4">
              <label for="exampleInputPassword1">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Enter a Price"
              />
            </div>
            <button
              type="button"
              onClick={onSave}
              className="btn btn-secondary mt-4"
            >
              Save
            </button>
            <button type="button" className="btn btn-dark mt-4  mx-4">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
