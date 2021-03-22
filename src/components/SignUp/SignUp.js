import React, { useContext, useState } from "react";
import "./SignUp.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const SignUp = () => {
  // state of user
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();

  // handling form or field blur
  const handleBlur = (e) => {
    let isFieldValid = true;

    // email validation
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }

    // password validation
    if (e.target.name === "password") {
      const isPassValid = e.target.value.length >= 6;
      const passHasNumber = /\d/.test(e.target.value);
      isFieldValid = isPassValid && passHasNumber;
    }

    // input field validation
    if (isFieldValid) {
      const validUser = { ...user };
      validUser[e.target.name] = e.target.value;
      console.log("valid user", validUser);
      setUser(validUser);
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        const newUserInfo = { ...user };
        newUserInfo.error = "";
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        console.log(loggedInUser);
      })
      .catch((error) => {
        var errorMessage = error.message;
        var email = error.email;
        const newUserInfo = { ...user };
        newUserInfo.error = errorMessage;
        console.log(email, errorMessage);
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
      });
  };

  // handling sign up
  const handleSignUp = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          console.log(newUserInfo);
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.push("/login");
        })
        .catch((error) => {
          var errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          console.log(errorMessage);
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1>Create An Account</h1>
        <div className="signup-form-container">
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
            name="email"
            placeholder="Email or Username"
            id=""
            required
            onBlur={handleBlur}
          />
          <input
            className="form-row"
            type="password"
            name="password"
            placeholder="Password"
            id=""
            required
            onBlur={handleBlur}
          />
          <input
            className="form-row"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id=""
            required
          />
          <button className="form-row btn btn-primary">
            Create an account
          </button>
        </div>
        <h5>Already have an account? {<Link to="/login">Login</Link>}</h5>
        <p>Or</p>
        <button className="btn google-btn" onClick={handleGoogleSignIn}>
          <span className="google-icon">
            {" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
              alt="google-icon"
            />{" "}
          </span>{" "}
          Sign In With Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
