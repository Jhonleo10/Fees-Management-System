import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavPage.css"; // Import the CSS for styling

export default function NavPage() {
  const navigate = useNavigate();

  return (
    <div className="navpage-container">
      <div className="overlay"></div>

      <Container className="text-center nav-content">
        <Row>
          <Col>
            <h1 className="title">Welcome to Fee Management System</h1>
            <p className="subtitle">Manage student fees with ease.</p>

            <div className="btn-group">
              <Button className="btn-login" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button className="btn-signup" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
