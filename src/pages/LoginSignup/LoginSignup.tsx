import { useState } from "react";
import classes from "./LoginSignup.module.scss";
import Google from "../../assets/icons/Google";
import Apple from "../../assets/icons/Apple";
import Logo from "../../assets/icons/Logo";
import TextLoop from "../../components/TextLoop/TextLoop";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";

const LoginSignup = () => {
  const [loginContainerVisibility, setLoginContainerVisibility] =
    useState(true);

  return (
    <div className={classes["login-signup-container"]}>
      <div className={classes["image-container"]}>
        <img
          src="https://images.unsplash.com/photo-1695527081901-b2dd7452cdcb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image.jpg"
        />
        <div className={classes["logo-container"]}>
          <Logo />
        </div>
        <div className={classes["text-wrapper"]}>
          <p className={classes["keep-text"]}>Keep</p>
          <TextLoop textArr={["Changing.", "Evolving.", "Growing."]} />
        </div>
      </div>

      {loginContainerVisibility ? (
        <Login setLoginContainerVisibility={setLoginContainerVisibility} />
      ) : (
        <SignUp setLoginContainerVisibility={setLoginContainerVisibility} />
      )}
    </div>
  );
};

export default LoginSignup;
