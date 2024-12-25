import Checkout from "../Checkout/Checkout";
import HomePage from "../HomePage/HomePage";

type typeRoutesConfig = {
  path?: string | undefined;
  component: React.ElementType;
};

export const routes: typeRoutesConfig[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
];
