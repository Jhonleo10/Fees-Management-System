import { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Student.css'; // Add this line to link the CSS file

export default function Student() {
  const nav = useNavigate();

  useEffect(() => {
    let name = localStorage.getItem("name");
    if (!name) {
      nav('/');
    }
  }, []);

  const [data, setdata] = useState([]);
  const [deleted, setdeleted] = useState(false);

  useEffect(() => {
    axios.post('http://localhost:3001/student/view', {})
      .then((res) => {
        setdata(res.data.message);
      });
  }, [deleted]);

  const goto = (regno) => {
    nav('/edit_student', { state: { regno: regno } });
  };

  const delete_data = (regno) => {
    axios.post('http://localhost:3001/student/delete', { regno: regno })
      .then((res) => {
        alert("Data Deleted Successfully");
        setdeleted(true);
      });
  };

  const goback = () => {
    nav('/home');
  };

  const AddStudent = () => {
    nav('/add-student');
  };

  return (
    <Container fluid className="student-container p-5">
      <Row className="m-5">
        <Col className="text-start">
          <button onClick={goback} className="btn btn-warning ms-2">Go Back</button>
        </Col>
        <Col className="text-start">
          <h2 className="student">Student Details</h2>
        </Col>
        <Col className="text-end">
          <button onClick={AddStudent} className="btn btn-info">Add Student</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table className="student-table">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Reg No</th>
                <th>Course</th>
                <th>Duration</th>
                <th>Fees</th>
                <th>Received</th>
                <th>Pending</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={d.regno} className="student-row">
                  <td>{i + 1}</td>
                  <td>{d.name}</td>
                  <td>{d.phone}</td>
                  <td>{d.location}</td>
                  <td>{d.regno}</td>
                  <td>{d.course}</td>
                  <td>{d.duration}</td>
                  <td>{d.fees}</td>
                  <td>{d.received}</td>
                  <td>{d.pending}</td>
                  <td>{d.balance}</td>
                  <td>{d.status}</td>
                  <td>
                    <a className="text-info" onClick={() => goto(d.regno)}>Edit</a>
                    <a className="text-danger" onClick={() => delete_data(d.regno)}>Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
