// import React from "react";
import { Link } from "react-router";

const MyCollection = () => {
  return (
    <div>
      <p className="font-bold text-3xl mt-7">
        My <span className="text-amber-500">Collection</span>
      </p>
      <br />

      <p>Start building your collection by adding your first movie.</p>
      <Link to='/addMovie' className="btn btn-outline btn-warning mt-5">Add Movie</Link>
    </div>
  );
};

export default MyCollection;
