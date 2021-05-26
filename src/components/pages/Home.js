import React, { Fragment, useState } from "react";
import axios from "axios";
import Search from "../users/Search";
import Users from "../users/Users";
import Spinner from "../layout/Spinner";

const Home = () => {
  const githubClientId = process.env.GITHUB_CLIENT_ID;
  const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Search searchUsers={searchUsers} />
      <Users users={users} clearUsers={clearUsers} />
    </Fragment>
  );
};

export default Home;
