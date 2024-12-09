import Layout from "./pages/Layout/Layout";
import classes from "./App.module.scss";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className={classes["app"]}>
      <Layout />
      <HomePage />
    </div>
  );
}

export default App;
