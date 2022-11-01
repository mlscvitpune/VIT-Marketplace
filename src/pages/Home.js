import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login";
import Signup from "../components/SignUp";

const Home = (props) => {
  return <>
    <div>Col 1</div>
    <div>Col 2</div>
    <div>
      {
        props.isLogin ? <Login/> : <Signup/>
      }
    </div>
  </>
};

export default Home;
