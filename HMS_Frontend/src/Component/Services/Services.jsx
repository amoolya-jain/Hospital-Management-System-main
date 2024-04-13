import React from "react";
import { Col, Container, Row } from "reactstrap";
import Base from "../Base/Base";
import Card from "../../Component/Card/Card";
import Sdata from "../Sdata/Sdata";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BaseCart from "../Base/BaseCart";

function Services() {
  return ( <BaseCart>   
        <div className="my-5">
          <h1 className="text-center">Our Services and Doctors</h1>
        </div>
        {/* <div class="container">
          <div class="row">
            <div class="col-sm">
            {Sdata.map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      desc={val.desc}
                    />
                  );
                })}
            </div>
            <div class="col-sm">
            {Sdata.map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      desc={val.desc}
                    />
                  );
                })}
            </div>
            <div class="col-sm">
              One of three columns
            </div>
          </div>
        </div> */}
        {/* <div className="container-fluid mb-5">
        <Row>
          <Col >
          <div classNamerow="row">
            <div className="col-6 mx-auto" style={{width:"100%"}}>
              <div className="row gy-10">
                {Sdata.map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      desc={val.desc}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          </Col>
        </Row>
          <div classNamerow="row">
            <div className="col-6 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      desc={val.desc}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="container-fluid mb-5">
  <Row>
    <Col>
      <div className="row">
        <div className="col-6 mx-auto" style={{width:"100%"}}>
          <div className="row gy-10">
            {Sdata.map((val, ind) => (
              <Card
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                desc={val.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </Col>
  </Row>
  <div className="row">
    <div className="col-6 mx-auto">
      <div className="row gy-4">
        {Sdata.map((val, ind) => (
          <Card
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            desc={val.desc}
          />
        ))}
      </div>
    </div>
  </div>
</div> */}


<div className="container-fluid mb-5">
  <div className="row">
    {Sdata.map((val, ind) => (
      <div key={ind} className="col-4" style={{width:"50%"}}>
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          desc={val.desc}
        />
      </div>
    ))}
  </div>
</div>

    </BaseCart> 
  );
}

export default Services;