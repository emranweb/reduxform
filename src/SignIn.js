import React from "react";

class SignIn extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="sing-in-wrapper mt-5">
              <h1>Sign In</h1>
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
