import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import { routes } from "./pages/Routes/routesConfig";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoginSignup from "./pages/LoginSignup/LoginSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
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
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
