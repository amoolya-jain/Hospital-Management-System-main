import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Foot() {
  return (
    <MDBFooter  bgColor='light' className='bg-light align-center fixed-bottom text-center text-lg-start text-muted'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='/'>
         HealCare
        </a>
      </div>
    </MDBFooter>
  );
}


// import React, { Component } from 'react';
// import Base from "../Base/Base";
// const Footer = () =>{
//     return (<>
//     <br></br>
//         <footer className='bg-light align-center' style={{textAlign:"center"}}>
//             <p>
//                 @ 2024 HealCare . All Rights Reserved  | Terms and Conditions
//             </p>

//         </footer>
//         </>
       
//     )
// }
// export default Footer;