import React from "react";
import { Col, Row } from "reactstrap";
import Base from "../../Base/Base";
import VericalNavbarAccountant from "./VericalNavbarAccountant";
import Dashboard from "../../../Component/Dashboard";

function AccountantDashboard() {
  return (
    <div>
      <Base>
        <br />
        <br />
        <br />
        <Row>
          <Col sm={{ size: 3 }}>
            <VericalNavbarAccountant />
          </Col>
          <Col sm={{ size: 6, offset: 1 }}>
            <h1>Dashboard</h1>
            <Dashboard
         
          />
          </Col>
        </Row>
      </Base>
    </div>
  );
}

export default AccountantDashboard;
