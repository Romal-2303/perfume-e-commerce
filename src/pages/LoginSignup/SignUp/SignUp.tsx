import classes from "./Signup.module.scss";
import Google from "../../../assets/icons/Google";
import Apple from "../../../assets/icons/Apple";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  validateEmail,
  validatePassword,
} from "../../../utilites/helper/EmailAndPasswordVerification";

interface SignUpProps {
  setLoginContainerVisibility: (rec: boolean) => void;
}

const SignUp = ({ setLoginContainerVisibility }: SignUpProps) => {
  const [createUserObj, setCreateuserObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const logInEnableClickHandler = () => {
    setLoginContainerVisibility(true);
  };

  const inputChangeHandler =
    (receivedVal: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setCreateuserObj((prevObj) => ({
        ...prevObj,
        [receivedVal]: value,
      }));

      if (receivedVal === "email") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: validateEmail(value) ? "" : "Invalid email address",
        }));
      }

      if (receivedVal === "password") {
        const validationResult = validatePassword(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: validationResult.isValid
            ? ""
            : validationResult.message || "",
        }));
      }
    };

  const createAccountClickHandler = async () => {
    const emailValid = validateEmail(createUserObj.email);
    const passwordValid = validatePassword(createUserObj.password).isValid;

    if (!emailValid || !passwordValid) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    let tempObj = { ...createUserObj } as any;
    tempObj["username"] = tempObj["firstName"] + tempObj["lastName"];
    delete tempObj["firstName"];
    delete tempObj["lastName"];

    try {
      const response = await fetch(
        "https://e-commerce-server-8df0.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tempObj),
        }
      );

      if (response.ok) {
        toast.success("Account created successfully!");
        setTimeout(() => {
          logInEnableClickHandler();
        }, 2000);
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to create account");
      }
    } catch (error) {
      toast.error("An error occurred while creating the account.");
    }
  };

  return (
    <div className={classes["create-account-wrapper"]}>
      <ToastContainer />
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
          {errors.email && <p className={classes.error}>{errors.email}</p>}
        </div>
        <div className={classes["password-container"]}>
          <input
            placeholder="Enter your password"
            type="password"
            onChange={inputChangeHandler("password")}
          />
          {errors.password && (
            <p className={classes.error}>{errors.password}</p>
          )}
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
