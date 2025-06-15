import React, { useState } from "react";
import { user, users, courses, lessons, lecture } from "../data/data";
import catLogo from '../assets/ico/cat-gray.svg';
import { Container, Tabs, Tab, Table, Button } from "react-bootstrap";

const AdminPanel = ({ currentUser = user }) => {
  const [activeTab, setActiveTab] = useState("users");

  if (!currentUser || currentUser.role !== "admin") {
    return <div className="text-danger m-5">Access Denied</div>;
  }

  const handleDelete = (type, id) => {
    // TODO: Add deletion logic (API call or state update)
    alert(`${type} with id ${id} would be deleted`);
  };

  const renderTable = (data, type) => (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((val, i) => (
              <td key={i}>{val}</td>
            ))}
            <td>
              <Button variant="warning" size="sm" className="me-2">Edit</Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(type, item.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <Container className="mt-5">
      <h2 className="mb-4">
				Admin Dashboard
			</h2>
			<div className="header__avatar mb-4" title={"Login user: " + user.name}>
				<img src={catLogo} alt={catLogo}/>
			</div>
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey="users" title="Users">
          {renderTable(users, "User")}
        </Tab>
        <Tab eventKey="courses" title="Courses">
          {renderTable(courses, "Course")}
        </Tab>
        <Tab eventKey="lessons" title="Lessons">
          {renderTable(lessons, "Lesson")}
        </Tab>
        <Tab eventKey="lecture" title="Lectures">
          {renderTable(lecture, "Lecture")}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AdminPanel;
