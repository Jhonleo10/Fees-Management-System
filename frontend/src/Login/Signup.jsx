import { React, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Signup.css';

export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navi = useNavigate();

  const gotosignin = () => {
    navi('/');
  }

  const submitdata = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name cannot be empty");
    } else if (!email) {
      alert("Email cannot be empty");
    } else if (!password) {
      alert("Password cannot be empty");
    } else {
      try {
        axios.post('http://localhost:3001/admin/signup', {
          name: name,
          email: email,
          password: password
        })
          .then((res) => {
            alert(res.data.msg);
            navi('/');
          })

      } catch (error) {
        alert("Something went wrong", error);
      }
    }
  }

  return (
    <>
      <Container className="text-center heading">
        <Row>
          <Col>
            <h1 className="main-heading">Fee Management System </h1>
          </Col>
        </Row>
      </Container>

      <Container className="signup-container">
        <Row>
          <Col className="signup-left" sm={12} md={6}>
            <div className="welcome-message">
              <img src="" alt="" />
              <h2>Welcome to the Fee Management System</h2>
              <h5>Already have an account?</h5>
              <button className="btn-signin" onClick={gotosignin}>SignIn</button>
            </div>
          </Col>

          <Col sm={12} md={6} className="signup-right">
            <form onSubmit={submitdata} className="signup-form">
              <h2 className="signup-title">Create Your Account</h2>

              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-input"
                onChange={(e) => setname(e.target.value)}
              />
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
              <input type="submit" value="Submit" className="submit-btn" />
            </form>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}
