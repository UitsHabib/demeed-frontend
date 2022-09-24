import React from "react";
import CustomerRoutes from "./customer.routes";
import Signup from "./components/signup";

export function CustomerClientRoutes(props) {
  return <CustomerRoutes path={props.path} />;
}

export { Signup };
