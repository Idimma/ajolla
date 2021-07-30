import { useHistory, useLocation } from "react-router-dom";
import "./styles.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext/authContext";
import { POST_AUTH_ROUTES } from "../../routes";

const Login = () => {
  let { push } = useHistory();

  const location = useLocation();

  useEffect(() => {
    checkStatus();
  });

  const checkStatus = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    const userToken = localStorage.getItem("user-token");

    if (user && userToken) {
      push(POST_AUTH_ROUTES);
    } else {
      return;
    }
  };

  // getting the values from the Auth context
  const { loginUser, restPassword } = useContext(AuthContext);

  // state for the email
  let [email, setEmail] = useState("");

  // state for the password
  const [password, setPassword] = useState("");

  // function for login
  const login = (e) => {
    // prevent defaulf submiting of form
    e.preventDefault();

    const submitObject = { email, password };

    // call the context fuction for login user
    loginUser(submitObject, push);
  };

  //function for reseting password
  const reset = (e) => {
    e.preventDefault();
    const submitObject = { email };
    restPassword(submitObject);
  };

  // Hide or show password
  let passwordRef = useRef();
  const tooglePassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  return (
    <div className="login">
      {location.pathname === "/" ? (
        <form className="form regiter" onSubmit={(e) => login(e)}>
          <p className="form-heading">Login</p>

          <div className="email-input">
            <img
              className="img-icon"
              src="https://app.tookanapp.com/app/img/email-icon.svg"
              style={{ filter: "red" }}
              alt=""
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>

          <div className="password-input">
            <img
              className="img-icon"
              src="https://app.tookanapp.com/app/img/password-icon.svg"
              alt=""
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              ref={passwordRef}
            />
            <i className="fa fa-eye" onClick={tooglePassword}></i>
          </div>

          {/*<div className="fogot-password-link">*/}
          {/*  <NavLink to="/recover">Forgot Password?</NavLink>*/}
          {/*</div>*/}

          <button type="submit" className="submit-btn">
            Login
          </button>

          {/*<span className="custom-register-span">Don't have an account?</span> <NavLink to="/">Sign Up</NavLink>*/}
        </form>
      ) : (
        <form className="form recover" onSubmit={(e) => reset(e)}>
          <p className="form-heading">Reset Password</p>
          <p className="custom-register-span">
            Enter your email to receive instructions on how to reset your
            password.
          </p>
          <div className="email-input">
            <img
              className="img-icon"
              src="https://app.tookanapp.com/app/img/email-icon.svg"
              style={{ filter: "red" }}
              alt=""
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          {/*<button type="submit" className="submit-btn">Reset Password</button>*/}
          {/*<NavLink to="/">Back to login</NavLink>*/}
        </form>
      )}

      {/*<div className="sign-up-bg-wrapper">*/}
      {/*  <img className="sign-up-bg" src="https://app.tookanapp.com/app/img/signup-bg-2.svg" alt=""/>*/}
      {/*  <img className="sign-up-bg-mobile" src="https://app.tookanapp.com/app/img/signup-bg-2.svg" alt=""/>*/}
      {/*</div>*/}
    </div>
  );
};

export default Login;
