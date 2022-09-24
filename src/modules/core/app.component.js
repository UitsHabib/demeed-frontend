import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../customer/components/login";
import { Signup } from "../customer";

function AppComponent() {
  return (
    <Routes>
      <Route path="/customer/signup" element={<Signup />} />
      <Route path="/customer/login" element={<Login />} />
    </Routes>
  );
}

export default AppComponent;
