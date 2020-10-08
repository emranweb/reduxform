import React from "react";
import SignIn from "./SignIn";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";

const homePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-1 text-center mt-5">Home Page</h1>
        </Col>
      </Row>
    </Container>
  );
};

const signUp = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-1 text-center mt-5">Sign Up</h1>
        </Col>
      </Row>
    </Container>
  );
};

class App extends React.Component {

  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={homePage} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={signUp} />
        </Switch>
      </main>
    );
  }
}

export default App;
