import React from "react";
import { FaCopyright, FaEnvelope, FaMapMarked } from "react-icons/fa";
import "./FooterSection.css";

function FooterSection() {
  return (
    <div>
      <div className="footer-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-3">
              <div className="d-flex flex-row">
                <div className="ml-3">
                  <h1 className="footer-section-sub-heading">MineCalc</h1>
                  <p className="footer-section-text">Calculation With Ease</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mb-3">
              <h1 className="footer-section-sub-heading">E-mail</h1>
              <div>
                <FaEnvelope className="icon" />
                <span className="footer-section-text ml-2">
                  mineCalc@gmail.com
                </span>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <h1 className="footer-section-sub-heading">Address</h1>
              <div>
                <FaMapMarked className="icon" />
                <span className="footer-section-text ml-2">
                  Lorem ipsum dolor sit, amet consectetur adipiscing elit
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section-copyright-container">
          <i className="fa fa-copyright icon" aria-hidden="true"></i>
          <FaCopyright className="icon" />
          <span className="footer-section-text ml-2">
            2022 MineCalc | All right reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
