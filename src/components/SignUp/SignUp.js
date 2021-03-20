import React from "react";
import "./SignUp.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const SignUp = () => {
  const handleFormSubmit = () => {
    console.log("Handling Submit");
  };
  return (
    <div>
      This is SignUp Page
      <form onSubmit={handleFormSubmit}>
        <h1>Create An Account</h1>
        <div className="form-container">
          <input
            className="form-row"
            type="text"
            name=""
            placeholder="Name"
            id=""
          />
          <input
            className="form-row"
            type="text"
            name=""
            placeholder="Email or Username"
            id=""
            required
          />
          <input
            className="form-row"
            type="password"
            name=""
            placeholder="Password"
            id=""
            required
          />
          <input
            className="form-row"
            type="password"
            name=""
            placeholder="Confirm Password"
            id=""
            required
          />
          <input
            className="form-row btn btn-primary"
            type="submit"
            value="Create An Account"
          />
        </div>
        <h5>
          Already have an account? <button>Login</button>{" "}
        </h5>
      </form>
    </div>
  );
};

export default SignUp;
