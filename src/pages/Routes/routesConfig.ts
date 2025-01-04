import Checkout from "../Checkout/Checkout";
import HomePage from "../HomePage/HomePage";
import LoginSignup from "../LoginSignup/LoginSignup";

type typeRoutesConfig = {
  path?: string | undefined;
  component: React.ElementType;
};

export const routes: typeRoutesConfig[] = [
  {
    path: "/",
    component: HomePage,
  },
  // {
  //   path: "/checkout",
  //   component: Checkout,
  // },
  {
    path: "/login",
    component: LoginSignup,
  },
  {
    path: "/signup",
    component: LoginSignup,
  },
];

export const protectedRoutes: typeRoutesConfig[] = [
  {
    path: "/checkout",
    component: Checkout,
  },
];
