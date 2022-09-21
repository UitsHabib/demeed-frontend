import React from "react";
import CustomerRoutes from "./customerRoutes";
import Singup from "./components/singup";

export function CustomerClientRoutes(props) {
    return <CustomerRoutes path={props.path} />
};

export { Singup };