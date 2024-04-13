import React from "react";


function Dashboard()
{
    var storedData = localStorage.getItem('data');
  console.log(JSON.parse(storedData).user.id);
   
    
    
    return(
        <div>
            <section style={{backgroundColor: "#eee"}}>
                <div class="container py-5">
                    <div class="row">
                        <div class="col">
                            <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item active" aria-current="page" style={{textAlign:"center"}}><h1>{JSON.parse(storedData).user.roles[0].name}</h1></li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                <img src="https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/08/tiktok-no-profile-picture.png" alt="avatar" class="rounded-circle img-fluid" style={{width: "150px"}}></img>
                                    <h5 class="my-3">{JSON.parse(storedData).user.firstname}</h5>
                                    <p class="text-muted mb-1">{JSON.parse(storedData).user.roles[0].name}</p>
                                    {/* <p class="text-muted mb-4">Mangalore</p> */}
                                    
                                    
                            </div>
                        </div>
                    </div>
        
                    
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Full Name</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{JSON.parse(storedData).user.firstName}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Email</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{JSON.parse(storedData).user.email}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Blood group</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{JSON.parse(storedData).user.bloodGroup}</p>
                                    </div>
                                </div>
                               
                                {/* <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Mobile</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">7784956102</p>
                                    </div>
                                </div> */}
                                <hr/>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Gender</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{JSON.parse(storedData).user.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* <Card/> */}
        </div>
    );
}

export default Dashboard;