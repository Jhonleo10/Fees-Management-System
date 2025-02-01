import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navi = useNavigate();

  const gotosignuo = () => {
    navi('/signup');
  }

  const submitdata = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email cannot be empty");
    } else if (!password) {
      alert("Password cannot be empty");
    } else {
      try {
        axios.post('http://localhost:3001/admin/signin', {
          email: email,
          password: password
        })
          .then((res) => {
            alert("Login Successful");
            localStorage.setItem("name", res.data.msg.name);
            navi('/home');
          })

      } catch (error) {
        alert(error);
      }
    }
  }

  return (
    <>
      <Container className="text-center heading">
        <Row>
          <Col>
            <h1 className="main-heading">Fees Management System</h1>
          </Col>
        </Row>
      </Container>

      <Container className="login-container">
        <Row>
          <Col className="login-left" sm={12} md={6}>
            <div className="welcome-message">
              <h2>Welcome to the Fee Management System</h2>
              <h5>Don't have an account?</h5>
              <button className="btn-signup" onClick={gotosignuo}>SignUp</button>
            </div>
          </Col>

          <Col sm={12} md={6} className="login-right">
            <form onSubmit={submitdata} className="login-form">
              <h2 className="login-title">Sign In</h2>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-input"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-input"
                onChange={(e) => setpassword(e.target.value)}
              />
              <input type="submit" value="Sign In" className="submit-btn" />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
