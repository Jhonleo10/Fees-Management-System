import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

export default function Home() {

  let navi = useNavigate();
  let [uname, setuname] = useState('');
  let [student, setstudent] = useState(0);
  let [total, settotal] = useState(0);
  let [received, setreceived] = useState(0);
  let [pending, setpending] = useState(0);
  let [data, setdata] = useState(0);

  useEffect(() => {
    let name = localStorage.getItem("name");
    setuname(name);
    if (!name) {
      navi('/');
    }
  }, []);

  useEffect(() => {
    axios.post('http://localhost:3001/student/view', {})
      .then((res) => {
        setdata(res.data.message);
        setstudent(res.data.message.length);

        let fees = 0;
        let Rfees = 0;
        let Pfees = 0;

        res.data.message.forEach(student => {
          fees += student.fees;
          Rfees += student.received;
          Pfees += student.pending;
        });

        settotal(fees);
        setreceived(Rfees);
        setpending(Pfees);
      });
  }, []);

  let logout = () => {
    localStorage.removeItem("name");
    navi('/');
  }

  let gotostudent = () => {
    navi('/student');
  }

  return (
    <Container fluid className='dashboard-container p-5'>
      <Row>
        <Col className='text-start welcome p-4'>
          <h1>Welcome to Dashboard.....! Mr. {uname}</h1>
          <h1 className='text-end'><a onClick={logout} className='logout-btn'>Logout</a></h1>
          <button></button>
        </Col>
      </Row>

      <Row className="dashboard-cards">
        <Col sm={12} md={3} className='dashboard-card bg-primary text-white p-4'>
          <h3>No Of Students</h3>
          <h1>{student}</h1>
          <button onClick={gotostudent} className='btn-dashboard'>View Student Lists</button>
        </Col>

        <Col sm={12} md={3} className='dashboard-card bg-info text-white p-4'>
          <h3>Total Fees</h3>
          <h1>Rs {total}</h1>
        </Col>

        <Col sm={12} md={3} className='dashboard-card bg-warning text-white p-4'>
          <h3>Received Fees</h3>
          <h1>Rs {received}</h1>
        </Col>

        {/* Centering the Pending Fees card */}
        <Col sm={12} md={3} className='dashboard-card bg-success text-white p-4 pending-card '>
          <h3>Pending Fees</h3>
          <h1>Rs {pending}</h1>
        </Col>
      </Row>
    </Container>
  );
}
