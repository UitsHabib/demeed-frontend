import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import data from "./dumy-data.json";

const App = () => {
  const [setData, contacts] = useState(data);

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>   
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {setData.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Routes>
        <Route path="/services" />
      </Routes>
    </div>
  );
};

export default App;