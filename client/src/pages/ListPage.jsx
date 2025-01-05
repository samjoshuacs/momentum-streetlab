import React from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  return (
    <div className="f jc g-5" style={{ color: "white" }}>
      ListPage
      <Link style={{ color: "white" }} to="/">
        Logout
      </Link>
    </div>
  );
};

export default ListPage;
