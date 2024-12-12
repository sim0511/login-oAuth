import AvailabilityPage from "./components/AvailabilityPage";
import LoginForm from "./components/loginForm";
import React from "react";
import AppRouter from "./routes/AppRouter";
const App = () => {
  return (
    <div>
      <AppRouter/>
      {/* <LoginForm /> */}
       {/* <AvailabilityPage /> */}
    </div>
  );
};

export default App;
