import React from "react";
import { Routes, Route  } from 'react-router-dom';
import { Login } from "../admin";

function App() {
    return (
      <div>
         <Routes>
            <Route path="/admin/login" element={ <Login />} />
         </Routes>
      </div>
    );
}
 
export default App;
 