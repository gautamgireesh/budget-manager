import React from "react";
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
import {Container} from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh"}}
      >
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              <Routes>
                <PrivateRoute exact path="/" element={<Dashboard/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    
  );
}