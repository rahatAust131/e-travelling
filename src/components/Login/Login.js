import { useContext, useState } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const Login = () => {
  // state of user
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

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
      setLoggedInUser(validUser);
      console.log("logged in user", loggedInUser);
    }
  };

  // handling google sign in
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          photo: photoURL,
          email: email,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        console.log(loggedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        var email = error.email;
        const signedInUser = { ...user };
        signedInUser.error = errorMessage;
        console.log(email, errorMessage);
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
      });
  };

  // handling login
  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        const newUserInfo = { ...res.user };
        newUserInfo.error = "";
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        updateUserName(loggedInUser.name);
        console.log("name" , loggedInUser.name);
        console.log("logged in", loggedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        const newUserInfo = { ...user };
        newUserInfo.error = errorMessage;
        console.log(errorMessage);
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
      });
  };

  // update user name
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then( () => {
        console.log("User name updated successfully");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="login-form-container" onSubmit={handleLogin}>
        <input
          className="form-row"
          type="email"
          name=""
          placeholder="Email"
          id=""
          required
          onBlur={handleBlur}
        />
        <input
          className="form-row"
          type="password"
          name=""
          placeholder="Password"
          id=""
          required
          onBlur={handleBlur}
        />
        <button className="btn btn-success">Login</button>
      </form>
      <div>
        <p>
          Don't Have an account? <Link to="/signup">Create an Account</Link>{" "}
        </p>
        {/* google sign in button */}
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
      </div>
      <p style={{ color: "red" }}> {user.error} </p>
    </div>
  );
};

export default Login;
