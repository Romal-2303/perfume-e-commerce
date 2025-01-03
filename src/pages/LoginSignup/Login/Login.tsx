import { useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import { useState } from "react";

interface LoginProps {
  setLoginContainerVisibility: (rec: boolean) => void;
}

const Login = ({ setLoginContainerVisibility }: LoginProps) => {
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
        navigate("/");
      })
      .catch((error) => {});
  };

  const inputChangeHandler =
    (receivedVal: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginObj((prevObj) => ({
        ...prevObj,
        [receivedVal]: event.target.value,
      }));
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
            placeholder="Enter your password"
            onChange={inputChangeHandler("password")}
          />
        </div>
        <button className={classes["log-in-btn"]} onClick={logInClickHandler}>
          Log In
        </button>
        <p className={classes["new-on-platform-text"]}>
          New on platform ?{" "}
          <span onClick={signUpEnableClickHandler}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
