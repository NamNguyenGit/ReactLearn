import React, { Component } from "react";

const Header = () => {
  const Style = {
    background: "blue",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  };
  return (
    <header style={Style}>
      <h1>List To Do </h1>
    </header>
  );
};

export default Header;
