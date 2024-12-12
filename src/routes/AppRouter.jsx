import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, isProtected }) => {
          if (isProtected) {
            return (
              <Route
                key={path}
                path={path}
                element={<ProtectedRoute>{element}</ProtectedRoute>}
              />
            );
          }

          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Router>
  );
};

export default AppRouter;
