import React from "react";
import SignIn from "./SignIn";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

const homePage = () => {
  return (
    <div className="container">
       <div className="row">
          <div className="col">
            <h1 className="display-1 text-center mt-5">Home Page</h1>
          </div>
       </div>
    </div>
  )
};

const signUp = () => {
  return (
    <div className="container">
       <div className="row">
          <div className="col">
             <h1 className="display-1 text-center mt-5">Sign Up</h1>
          </div>
       </div>
    </div>
  )
};

function App() {
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

export default App;
