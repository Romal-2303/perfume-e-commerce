import { useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/slices/auth/authSlice";

interface LoginProps {
  setLoginContainerVisibility: (rec: boolean) => void;
}

const Login = ({ setLoginContainerVisibility }: LoginProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginObj, setLoginObj] = useState({});

  const signUpEnableClickHandler = () => {
    setLoginContainerVisibility(false);
  };

  const logInClickHandler = () => {
    fetch("https://e-commerce-server-8df0.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        localStorage.setItem("authToken", responseData.token);

        dispatch(setToken(responseData.token));

        navigate("/");
      })
      .catch((error) => {
        console.error("Login Error:", error);
        alert("Login failed! Please try again.");
      });
  };

  const inputChangeHandler =
    (receivedVal: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginObj((prevObj) => ({
        ...prevObj,
        [receivedVal]: event.target.value,
      }));
    };

  const googleLoginHandler = () => {
    const clientId =
      "403212453455-3ac34plan1v3ithv6ldkmsj2ivdqlf1b.apps.googleusercontent.com";
    const redirectUri = "http://localhost:5000/api/auth/google/callback";
    const scope = "email profile";

    const authUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${clientId}&` +
      `redirect_uri=${redirectUri}&` +
      `response_type=code&` +
      `scope=${scope}&` +
      `access_type=offline&` +
      `prompt=consent`;

    window.location.href = authUrl;
  };

  return (
    <div className={classes["login-container-wrapper"]}>
      <div className={classes["log-in-container"]}>
        <p className={classes["log-in-text"]}>Log In</p>
        <div className={classes["email-container"]}>
          <input placeholder="Email" onChange={inputChangeHandler("email")} />
        </div>
        <div className={classes["password-container"]}>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={inputChangeHandler("password")}
          />
        </div>
        <div className={classes['login-wrapper']}>
        <button className={classes["log-in-btn"]} onClick={logInClickHandler}>
          Log In
        </button>
        <div className={classes["or"]}>or</div>
        <button
          className={classes["log-in-btn"]}
          onClick={googleLoginHandler}
        >
          Sign in with Google
        </button>
        </div>
        <p className={classes["new-on-platform-text"]}>
          New on platform?{" "}
          <span onClick={signUpEnableClickHandler}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
