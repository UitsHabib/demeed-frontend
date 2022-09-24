import React from "react";
import { Route, Routes } from "react-router-dom";

import { Signup } from "../customer";
import Signin from "../customer/components/Signin";

function AppComponent() {
  return (
    <Routes>
      <Route path="/customer/signup" element={<Signup />} />
      <Route path="/customer/signin" element={<Signin />} />
    </Routes>
  );
}

export default AppComponent;
