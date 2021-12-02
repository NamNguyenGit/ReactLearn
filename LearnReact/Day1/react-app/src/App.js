import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import React, { Fragment } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <Todos></Todos>
    </Fragment>
  );
};

export default App;
