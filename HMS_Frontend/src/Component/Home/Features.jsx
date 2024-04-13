import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function Features()
{
    return(
        <div style={{marginLeft:"40px", marginRight:"40px"}}>
        <div style={{backgroundColor:"#C4E4FF", borderRadius:"20px"}}>
        <br></br>
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">We have several features which are userfriendly and needy in a technological world.</h2>
                <p className="text-xl text-gray-400">These features helps us to store and track patient information along with secure access to the data.</p>
            </div>
            <MDBCard style={{marginLeft:"150px", marginRight:"150px",marginTop:"20px",marginBottom:"10px"}}>
                <MDBCardBody style={{paddingBottom:"-80px"}}>
            <section class="mb-5">
            <div class="row gx-lg-5">
                <div class="col-lg-6 mb-5">
                <div class="d-flex align-items-start">
                <div class="flex-shrink-0">
                    <div class="p-3 badge-primary rounded-4">
                        {/* <i class="fas fa-copy fa-lg text-primary fa-fw"></i> */}
                        <FontAwesomeIcon icon={faCopy} style={{fontSize:"40px", color:"#124076"}}/>
                    </div>
                    </div>
                    <div class="flex-grow-1 ms-4">
                    <p class="fw-bold mb-1">Go Paperless</p>
                    <p class="text-muted mb-1">
                    Save paper , save money. Welcome to new age of paperless practice.
                    </p>
                    {/* <small><a href="">Learn more</a></small> */}
                    </div>
                </div>
                </div>

                <div class="col-lg-6 mb-5">
                <div class="d-flex align-items-start">
                    <div class="flex-shrink-0">
                    <div class="p-3 badge-primary rounded-4">
                        <FontAwesomeIcon icon={faHandsHoldingChild} style={{fontSize:"40px", color:"#124076"}}/>
                    </div>
                    </div>
                    <div class="flex-grow-1 ms-4">
                    <p class="fw-bold mb-1">Improved Patient Care</p>
                    <p class="text-muted mb-1">
                    Software provides tools to help you concentrate more on what's more important ie, patient care.
                    </p>
                    {/* <small><a href="">Learn more</a></small> */}
                    </div>
                </div>
                </div>

                <div class="col-lg-6 mb-5">
                <div class="d-flex align-items-start">
                    <div class="flex-shrink-0">
                    <div class="p-3 badge-primary rounded-4">
                        <FontAwesomeIcon icon={faChartSimple} style={{fontSize:"40px", color:"#124076"}}/>
                    </div>
                    </div>
                    <div class="flex-grow-1 ms-4">
                    <p class="fw-bold mb-1">Analytics</p>
                    <p class="text-muted mb-1">
                    Our analytics enables us to understand and analyse patient records.
                    </p>
                    {/* <small><a href="">Learn more</a></small> */}
                    </div>
                </div>
                </div>

                <div class="col-lg-6 mb-5">
                <div class="d-flex align-items-start">
                    <div class="flex-shrink-0">
                    <div class="p-3 badge-primary rounded-4">
                        {/* <i class="fas fa-cloud-upload-alt fa-lg text-primary fa-fw"></i> */}
                        <FontAwesomeIcon icon={faCloudArrowUp} style={{fontSize:"40px", color:"#124076"}}/>
                    </div>
                    </div>
                    <div class="flex-grow-1 ms-4">
                    <p class="fw-bold mb-1">Software System</p>
                    <p class="text-muted mb-1">
                    Given healCare is software application, you get automatic software updates for free.
                    </p>
                    {/* <small><a href="">Learn more</a></small> */}
                    </div>
                </div>
            </div>

            </div>
            </section>
            </MDBCardBody>
            </MDBCard>
            <br>
            </br>
        </div>
            <br></br>
            <br></br>

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2 mb-4"><b>Our statistics</b></h1>
          </div>
            
        <div style={{backgroundColor:"#C4E4FF", borderRadius:"20px"}}>
            <MDBRow style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"20px", paddingRight:"20px"}}>
            <MDBCol sm='3'>
                <MDBCard>
                <MDBCardBody>
                <div style={{textAlign:"center"}}><i class="fa fa-user-md fa-2x"></i></div>
                    <MDBCardTitle style={{textAlign:"center" , fontSize:"40px"}}>150</MDBCardTitle>
                    <MDBCardText style={{textAlign:"center"}}>
                    Doctors
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='3'>
                <MDBCard>
                <MDBCardBody>
                <div style={{textAlign:"center"}}><i class="fa fa-user-plus fa-2x"></i></div>
                    <MDBCardTitle style={{textAlign:"center" , fontSize:"40px"}}>320</MDBCardTitle>
                    <MDBCardText style={{textAlign:"center"}}>
                        Patients                    
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='3'>
                <MDBCard>
                <MDBCardBody>
                <div style={{textAlign:"center"}}><i class="fa fa-calendar-check fa-2x"></i></div>
                    <MDBCardTitle style={{textAlign:"center", fontSize:"40px"}}>410</MDBCardTitle>
                    <MDBCardText style={{textAlign:"center"}}>
                    Appointments
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
           
            <MDBCol sm='3'>
                <MDBCard>
                <MDBCardBody>
                <div style={{textAlign:"center"}}><i class="fa-solid fa-award fa-2x"></i></div>
                    <MDBCardTitle style={{textAlign:"center" , fontSize:"40px"}}>10</MDBCardTitle>
                    <MDBCardText style={{textAlign:"center"}}>
                    Awards
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
            </div>
            <br></br>
        </div>
    );
}