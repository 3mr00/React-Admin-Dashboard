import React, { useEffect } from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

import AOS from "aos";
import "aos/dist/aos.css";

const RightSide = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
    AOS.refresh();
  }, []);

  return (
    <div
      className="RightSide"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
