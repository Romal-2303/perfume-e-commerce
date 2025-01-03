import { useNavigate } from "react-router-dom";
import classes from "./Banner.module.scss";

interface BannerProps {
  closeClickHandler: (key: boolean) => any;
}

const Banner = ({ closeClickHandler }: BannerProps) => {
  const navigate = useNavigate();

  const crossIconClickHandler = () => {
    closeClickHandler?.(false);
  };

  const signUpClickHandler = () => {
    navigate("/login");
  };

  return (
    <div className={classes["banner-container"]}>
      <p className={classes["banner-text"]}>
        Sign up and{" "}
        <span className={classes["discount-text"]}>get 30% off</span> on your
        first order.{" "}
        <span className={classes["sign-up-text"]} onClick={signUpClickHandler}>
          Sign up
        </span>
      </p>
      <div
        className={classes["close-icon-container"]}
        onClick={crossIconClickHandler}
      >
        X
      </div>
    </div>
  );
};

export default Banner;
