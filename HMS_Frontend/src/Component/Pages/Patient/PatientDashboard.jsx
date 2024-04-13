import React from "react";
import { Col, Row } from "reactstrap";
import Base from "../../Base/Base";
import VerticalNavbar from "./VerticalNavbarPatient";
import Dashboard from "../../../Component/Dashboard";


export default function PatientDashboard() {
 

  return (
    <Base>
      <br />
      <br />
      <br />
      <Row>
        <Col sm={{ size: 3 }}>
          <VerticalNavbar />
        </Col>
        <Col sm={{ size: 6, offset: 1 }}>
         
          <Dashboard
          />
        </Col>
      </Row>
    </Base>
  );
}
