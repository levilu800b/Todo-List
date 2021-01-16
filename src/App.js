import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Add from "./Add";
import Links from "./Links";
import VisibleTodoList from "./VisibleTodoList";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="info" variant="dark">
          <Navbar.Brand> Todo Redux App</Navbar.Brand>
        </Navbar>
        <Container>
          <Add/>
          <Links/>
          <VisibleTodoList/>
        </Container>
      </>
    );
  }
}

export default App;
