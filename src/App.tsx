import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import { protectedRoutes, routes } from "./pages/Routes/routesConfig";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import HomePage from "./pages/HomePage/HomePage";
import { setToken } from "./redux/slices/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      dispatch(setToken(token));
      navigate("/");
    }
  }, [dispatch, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginSignup />} />

      {routes.map((route) => {
        const Component = route.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Layout>
              <Routes>
                {protectedRoutes.map((route) => {
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

      {/* <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  {routes
                    .filter((route) => route.path !== "/checkout")
                    .map((route) => {
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
        /> */}
    </Routes>
  );
}

export default App;
