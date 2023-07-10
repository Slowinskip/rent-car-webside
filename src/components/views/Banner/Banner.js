import React, { useState } from "react";
import styles from "./Banner.module.scss";
import { Col, Row } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";

const Banner = () => {
  const [carImage, setCarImage] = useState(
    "./image/mb-e-class-4d-blue-2021_preview_rev_1.png"
  );

  const car = [
    "./image/peugeot-3008-suv-blue-2021.png",
    "./image/mb-e-class-4d-blue-2021_preview_rev_1.png",
    "./image/skoda-kamiq-suv-black-2021.png",
  ];

  return (
    <Row className={styles.container}>
      <Col className={"col-5 " + styles.banerText}>
        <h4>Plan your trip now</h4>
        <h1 className={styles.bannerTitle}>
          Save <span>big</span> with our car rental
        </h1>
        <div>
          <button className={styles.btnBook}>
            Book Ride <CiCircleCheck />
          </button>
          <button className={styles.btnLern}>
            Lern More <BsArrowRightShort />
          </button>
        </div>
      </Col>
      <Col className={"col-5 " + styles.banerImage}>
        <img alt="img" src={carImage}></img>
      </Col>
    </Row>
  );
};

export default Banner;
