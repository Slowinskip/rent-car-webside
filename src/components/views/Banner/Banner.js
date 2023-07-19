import React from "react";
import styles from "./Banner.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={"col col-md-6 " + styles.banerText}>
        <h4>Plan your trip now</h4>
        <h1 className={styles.bannerTitle}>
          Save <span>big</span> with our car rental
        </h1>
        <div className={styles.btnDiv}>
          <a href="#bookCar" className={styles.btnBook}>
            Book Ride
            <CiCircleCheck />
          </a>
          <a href="#about" className={styles.btnLern}>
            Lern More <BsArrowRightShort />
          </a>
        </div>
      </div>
      <div className={"col col-md-6 " + styles.banerImage}>
        <img
          alt="img"
          src="https://i.ibb.co/Khcqyzh/mb-e-class-4d-blue-2021-preview-rev-1.png
"
        ></img>
      </div>
    </div>
  );
};

export default Banner;

/*
https://i.ibb.co/0F418Hw/audi.png audi
https://i.ibb.co/Bs92v7Z/hyundai-elantra-4d-schwarz-2017-preview-rev-1.png  hunday
https://i.ibb.co/KND7mKH/jeep2.png jeep
https://i.ibb.co/Khcqyzh/mb-e-class-4d-blue-2021-preview-rev-1.png  merc
https://i.ibb.co/7RgnQ2m/merc.png  merc 2 3x
https://i.ibb.co/5nsSx3K/Mitsubishi1.png   mitsu
https://ibb.co/TLDR989
https://i.ibb.co/RvbvKYK/Mobile-Background2.png   app
https://i.ibb.co/qBkM3zc/person1.jpg  girl
https://i.ibb.co/ZHbr5h2/person2.jpg  man
https://i.ibb.co/rpKN17Q/peugeot-3008-suv-blue-2021.png   peuge
https://i.ibb.co/zN6B79t/skoda-kamiq-suv-black-2021.png skoda
*/
