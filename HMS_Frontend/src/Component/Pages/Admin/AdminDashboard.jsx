import React from "react";
import { Col, Container, Row } from "reactstrap";
import Base from "../../Base/Base";
import VerticalNavbarAdmin from "./VerticalNavbarAdmin";
import Dashboard from "../../../Component/Dashboard";
function AdminDashboard() {
  return (
    <Base>
      <br />
      <br />
      <br />
      <Row>
        <Col sm={{ size: 3 }}>
          <VerticalNavbarAdmin />
        </Col>
        <Col sm={{ size: 6, offset: 1 }}>
          <h1>Dashboard</h1>

          <Dashboard
         
          />

        </Col>
      </Row>
    </Base>
  );
}

export default AdminDashboard;
