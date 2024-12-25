import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import { routes } from "./pages/Routes/routesConfig";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
