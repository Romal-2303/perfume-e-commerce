import Dev from "../../../assets/icons/Dev";
import Dribble from "../../../assets/icons/Dribble";
import EmailIcon from "../../../assets/icons/EmailIcon";
import Github from "../../../assets/icons/Github";
import Instagram from "../../../assets/icons/Instagram";
import LinkedIn from "../../../assets/icons/LinkedIn";
import X from "../../../assets/icons/X";
import classes from "./Footer.module.scss";
import { store } from "../../../redux/store";
import Logo from "../../../assets/icons/Logo";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["upper-strip"]}></div>
      <div className={classes["content-container"]}>
        <div className={classes["news-letter-container"]}>
          <div className={classes["sign-up-container"]}>
            <div className={classes["sign-up-text-container"]}>
              <p className={classes["title"]}>SIGN UP AND SAVE</p>
              <p className={classes["desc"]}>
                Subscribe to get special offers, free giveaways, and
                once-in-a-lifetime deals.
              </p>
            </div>
            <div className={classes["email-container"]}>
              <input placeholder="Enter your email"></input>
              <div className={classes["email-icon-container"]}>
                <EmailIcon width="22px" height="22px" />
              </div>
            </div>
          </div>
        </div>

        <div className={classes["logo-link-column-container"]}>
          <div className={classes["logo-container"]}>
            <Logo color="white" />
          </div>
          <div className={classes["link-column-container"]}>
            <div className={classes["resources-container"]}>
              <p className={classes["container-heading"]}>Resources</p>
              <p>Find A Store</p>
              <p>Become a member</p>
              <p>Send Us Feedback</p>
            </div>
            <div className={classes["help-container"]}>
              <p className={classes["container-heading"]}>Help</p>
              <p>Order Status</p>
              <p>Delivery</p>
              <p>Returns</p>
            </div>
            <div className={classes["company-container"]}>
              <p className={classes["container-heading"]}>Company</p>
              <p>About Nike</p>
              <p>News</p>
              <p>Career</p>
            </div>
            <div className={classes["legal-container"]}>
              <p className={classes["container-heading"]}>Legal</p>
              <p>Terms & Privacy</p>
              <p>Licenses</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["separator"]}></div>
      <div className={classes["trademark-social-media-link-container"]}>
        <div className={classes["social-media-container"]}>
          <LinkedIn />
          <X />
          <Instagram />
          <Dev />
          <Github />
          <Dribble />
        </div>
        <p className={classes["trademark-text"]}>
          ©2077 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
