import React, { Fragment, useState } from "react";
import axios from "axios";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => {
  const githubClientId = process.env.GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

  const [users, setUsers] = useState([]);

  const searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    setUsers(res.data.items);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <Fragment>
      <Search searchUsers={searchUsers} />
      <Users users={users} clearUsers={clearUsers} />
    </Fragment>
  );
};

export default Home;
