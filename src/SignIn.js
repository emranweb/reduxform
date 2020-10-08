import React from "react";
import { reduxForm, Field } from "redux-form";

class SignIn extends React.Component {
  errorMessage = (meta) => {
    if (meta.error && meta.touched) {
      return <div className="p-2 mb-2 bg-danger text-white">{meta.error}</div>;
    }
  };

  inputField = (props) => {
    const validClassNme = `${
      props.meta.error && props.meta.touched
        ? "form-control is-invalid"
        : "form-control"
    }`;
    return (
      <div className="form-group">
        <label>{props.label}</label>
        <input
          autoComplete="off"
          {...props.input}
          type={props.type}
          placeholder={props.placeholder}
          className={validClassNme}
        />
      </div>
    );
  };

  formSubmit = (value) => {
    console.log(value);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="sing-in-wrapper mt-5">
              <h1>Sign In</h1>
              <form className="mt-4" onSubmit={this.props.handleSubmit(this.formSubmit)}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your name"
                  component={this.inputField}
                  label="Email"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  component={this.inputField}
                  label="Password"
                />

                <button type="submit" className="btn px-5 btn-primary">
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

const validate = (val) => {
  const error = {};
  if (!val.email) {
    error.email = "Enter Valid  Email";
  }
  if (!val.password) {
    error.password = "Enter a valid Password";
  }

  return error;
};

export default reduxForm({
  form: "signin",
  validate,
})(SignIn);
