// import { useState } from "react";
// import { Carousel } from "react-bootstrap";
// import img1 from "../images/ehr3.jpg";
// import img2 from "../images/hosp2.jpg";
// import img3 from "../images/dj.jpg";

// function CreateCorosol() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <div className="container">
//       <Carousel
//         activeIndex={index}
//         onSelect={handleSelect}
//         className="carsoul"
//       >
//         <Carousel.Item>
//           <img
//             style={{
//               borderStyle: "",
//               borderColor: "",
//               borderRadius: "20px",
//               borderWidth: "5px",
//               height: "500px",
//               width: "1500px",
//             }}
//             className="d-block w-100"
//             src={img1}
//             alt=""
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             style={{
//               borderStyle: "",
//               borderColor: "",
//               borderRadius: "20px",
//               borderWidth: "5px",
//               height: "500px",
//               width: "1500px",
//             }}
//             className="d-block w-100"
//             src={img3}
//             alt="Second slide"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             style={{
//               borderStyle: "",
//               borderColor: "",
//               borderRadius: "20px",
//               borderWidth: "5px",
//               height: "500px",
//               width: "1500px",
//             }}
//             className="d-block w-100"
//             src={img2}
//             alt="Third slide"
//           />
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default CreateCorosol;

import { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/hc1.png";
import img2 from "../images/hc2.png";
import img3 from "../images/hc3.png";

function CreateCorosol() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carsoul"
      >
        <Carousel.Item>
          <img
            style={{
              borderStyle: "",
              borderColor: "",
              borderRadius: "20px",
              borderWidth: "5px",
              height: "500px",
              width: "1500px",
            }}
            className="d-block w-100"
            src={img1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              borderStyle: "",
              borderColor: "",
              borderRadius: "20px",
              borderWidth: "5px",
              height: "500px",
              width: "1500px",
            }}
            className="d-block w-100"
            src={img3}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              borderStyle: "",
              borderColor: "",
              borderRadius: "20px",
              borderWidth: "5px",
              height: "500px",
              width: "1500px",
            }}
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CreateCorosol;


