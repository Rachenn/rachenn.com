/*index.jsx*/
import React from "react";
//Functional Component 
//You have to use the link component to link between you pages 
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Main Page</small>
      <Link to="/users">Show List of Users</Link>
    </div>
  );
};

export default MainPage;