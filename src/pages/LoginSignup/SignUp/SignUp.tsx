import classes from "./Signup.module.scss";
import Google from "../../../assets/icons/Google";
import Apple from "../../../assets/icons/Apple";
import { useState } from "react";

interface SignUpProps {
  setLoginContainerVisibility: (rec: boolean) => void;
}

const SignUp = ({ setLoginContainerVisibility }: SignUpProps) => {
  const [createUserObj, setCreateuserObj] = useState({});

  const logInEnableClickHandler = () => {
    setLoginContainerVisibility(true);
  };

  const createAccountClickHandler = () => {
    let tempObj = { ...createUserObj } as any;

    tempObj["username"] = tempObj["firstName"] + tempObj["lastName"];

    delete tempObj["firstName"];
    delete tempObj["lastName"];

    fetch("https://e-commerce-server-8df0.onrender.com/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempObj),
    });
  };

  const inputChangeHandler =
    (receivedVal: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreateuserObj((prevObj) => ({
        ...prevObj,
        [receivedVal]: event.target.value,
      }));
    };

  return (
    <div className={classes["create-account-wrapper"]}>
      <div className={classes["create-account-container"]}>
        <p className={classes["create-account-text"]}>Create an account</p>
        <p className={classes["already-text"]}>
          Already have an account ?{" "}
          <span onClick={logInEnableClickHandler}>Log in</span>
        </p>
        <div className={classes["first-last-container"]}>
          <input
            placeholder="First name"
            onChange={inputChangeHandler("firstName")}
          />
          <input
            placeholder="Last name"
            onChange={inputChangeHandler("lastName")}
          />
        </div>
        <div className={classes["email-container"]}>
          <input placeholder="Email" onChange={inputChangeHandler("email")} />
        </div>
        <div className={classes["password-container"]}>
          <input
            placeholder="Enter your password"
            type="password"
            onChange={inputChangeHandler("password")}
          />
        </div>
        <div className={classes["agree-check-container"]}>
          <input type="checkbox"></input>
          <p>
            I agree to the <a>Terms & Conditions</a>
          </p>
        </div>
        <button
          className={classes["create-account-btn"]}
          onClick={createAccountClickHandler}
        >
          Create account
        </button>
        <div className={classes["register-text-container"]}>
          <p>Or register with</p>
        </div>
        <div className={classes["google-apple-container"]}>
          <button>
            <Google /> Google
          </button>
          <button className={classes["apple-btn"]}>
            <Apple /> Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
