import React from "react";
import CustomerRoutes from "./customerRoutes";
import Signup from "./components/Signup";

export function CustomerClientRoutes(props) {
    return <CustomerRoutes path={props.path} />
};

export { Signup };