import Layout from "./pages/Layout/Layout";
import classes from "./App.module.scss";
import HomePage from "./pages/HomePage/HomePage";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <div className={classes["app"]}>
      <Layout>
        {/* <HomePage /> */}
        <Checkout/>
      </Layout>
    </div>
  );
}

export default App;
