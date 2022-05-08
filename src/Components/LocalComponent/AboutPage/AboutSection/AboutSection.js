import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="pt-5 pb-5">
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-12 mt-3">
              <h1 className="edu-heading">About Us</h1> <hr />
            </div>
          </div>
        </div>

        <div className="about-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-right border border-primary rounded-right">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="text-center">
                  <img src="./aim.jpeg" className="about-section-img" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-7 about-section-content-container">
                <h1 className="about-section-heading">Our Aim</h1>

                <p className="about-section-description">
                  We are developing a web page application specifically for the
                  mining industry. On this page, we have designed algorithms on
                  mining formulae from most of the domains of mining, such as
                  drilling and blasting, rock mechanics, mine ventilation, and
                  mine planning and design. We have only shown a demo here, but
                  our goal is to cover everything. Each problem has been created
                  to be user-friendly. It will also help the learner develop a
                  passion for mining. Our algorithm was created in a unique
                  approach. In the case of multiple parameter input, we also
                  applied some data structure ideas to make input possible. Our
                  website will also be dynamic in nature.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end">
          <div className="abouts-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-left border border-warning rounded-left">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-5 order-1 order-md-2">
                  <div className="text-center">
                    <img
                      src="./vision.png"
                      className="abouts-section-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-7 order-2 order-md-1 about-section-content-container">
                  <h1 className="abouts-section-heading">Our Vision</h1>

                  <p className="abouts-section-description">
                    We want to create a webpage that has all of the formulae for
                    the entire mining domain. We also want to create a mining
                    community where people will use these formulae and can
                    correct them if they become obsolete. We aim to create a
                    site that can be viewed from anywhere in the world and where
                    miners can find any formula with a single click. We're also
                    working on integrating technology that will allow those
                    equations to solve several inputs at once. We're also
                    creating this website in the hopes of generating interest in
                    the mining field among students. This website will also
                    assist researchers in obtaining collated material. This will
                    assist students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-right border border-primary rounded-right">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="text-center">
                  <img
                    src="./whoWeare.png"
                    className="about-section-img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-md-7 about-section-content-container">
                <h1 className="about-section-heading">Who We Are</h1>

                <p className="about-section-description">
                  We are enthusiast & currently pursuing B-tech in mining
                  engineering from IIT(ISM) DHANBAD, wants to contribute to
                  mining society by our knowledge. Mining industry is prime
                  source of all the material whatever we are using in our daily
                  life. We focus on developing tools which will aid the
                  researcher, student and Industry experts to ease complex
                  mining. Formulae which is found after great research are
                  ruling principles and hosting it globally will help everyone
                  to take reference of it at least once. Mining is of course
                  very vast but it is our deliberate attempt to bring it at one
                  place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
