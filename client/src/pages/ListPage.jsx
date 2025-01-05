import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListPage = () => {
  const { temp, setTemp } = useState(null);
  const fetchAPI = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/me");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

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
