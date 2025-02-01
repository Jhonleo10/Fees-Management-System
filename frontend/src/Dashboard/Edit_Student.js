import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Edit.css'; // Link the CSS file for styling

export default function Edit_Student() {
  let [name, setname] = useState('');
  let [phone, setphone] = useState('');
  let [location, setlocation] = useState('');
  let [course, setcourse] = useState('');
  let [duration, setduration] = useState('');
  let [fees, setfees] = useState('');
  let [received, setreceived] = useState('');
  let [pending, setpending] = useState('');
  let [balance, setbalance] = useState('');
  let [status, setstatus] = useState('');
  let [editdata, seteditdata] = useState([]);
  let [regno, setregno] = useState('');

  const loc = useLocation();
  const reg = loc.state?.regno;

  let nav = useNavigate();
  useEffect(() => {
    let name = localStorage.getItem("name");
    if (!name) {
      nav('/');
    }
  }, []);

  useEffect(() => {
    axios.post('http://localhost:3001/student/getdata', { regno: reg })
      .then((res) => {
        seteditdata(res.data.message);
      });
  }, [reg]);

  useEffect(() => {
    setregno(editdata.regno);
    setphone(editdata.phone);
    setlocation(editdata.location);
    setcourse(editdata.course);
    setduration(editdata.duration);
    setfees(editdata.fees);
    setreceived(editdata.received);
    setpending(editdata.pending);
    setbalance(editdata.balance);
    setstatus(editdata.status);
    setname(editdata.name);
  }, [editdata]);

  let goback = () => {
    nav('/student');
  };

  const update_data = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/student/update', {
      name: name,
      phone: phone,
      location: location,
      regno: regno,
      course: course,
      duration: duration,
      fees: fees,
      received: received,
      pending: pending,
      balance: balance,
      status: status,
    })
      .then((res) => {
        alert(res.data.Message);
        nav('/student');
      });
  };

  return (
    <Container fluid className="edit-student-container p-5">
      <Row className="m-5">
        <Col className="text-start">
          <button onClick={goback} className="btn btn-warning ms-2">Go Back</button>
        </Col>
        <Col className="text-start edit">
          <h2 className="">Edit Student Details</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={update_data} className="edit-student-form">
            <h1 className="text-center m-4 bg-warning p-2 text-white">Particulars</h1>
            <input disabled type="text" value={regno} placeholder="Reg no" onChange={(e) => setregno(e.target.value)} />
            <input type="text" defaultValue={name} placeholder="Name" onChange={(e) => setname(e.target.value)} />
            <input type="number" defaultValue={phone} placeholder="Phone" onChange={(e) => setphone(e.target.value)} />
            <input type="text" defaultValue={location} placeholder="Location" onChange={(e) => setlocation(e.target.value)} />
            <input type="text" defaultValue={course} placeholder="Course" onChange={(e) => setcourse(e.target.value)} />
            <input type="text" defaultValue={duration} placeholder="Duration" onChange={(e) => setduration(e.target.value)} />
            <input type="text" defaultValue={fees} placeholder="Fees" onChange={(e) => setfees(e.target.value)} />
            <input type="text" defaultValue={received} placeholder="Received" onChange={(e) => setreceived(e.target.value)} />
            <input type="text" defaultValue={pending} placeholder="Pending" onChange={(e) => setpending(e.target.value)} />
            <input type="text" defaultValue={balance} placeholder="Balance" onChange={(e) => setbalance(e.target.value)} />
            <input type="text" defaultValue={status} placeholder="Status" onChange={(e) => setstatus(e.target.value)} />
            <input type="submit" value="Update" />
          </form>
        </Col>
      </Row>
    </Container>
  );
}
