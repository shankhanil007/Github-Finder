import React, { Fragment } from "react";
import Search from "../users/Search";
// import Users from '../users/Users';

const Home = () => (
  <Fragment>
    <Search searchUsers={searchUsers} />
  </Fragment>
);

export default Home;
