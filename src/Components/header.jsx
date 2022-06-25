import { Component } from "react";
import Services from "./services";
import About from "./about";
import Portfolio from "./portfolio";
import Blog from "./Blog";
import ContactUS from "./contact";
import Footer from "./footer";
import "animate.css/animate.css";
import Navv from "./Nav";
import { Pagination } from "swiper";
import "swiper/css";
import back1 from "../images/back1.jpg";
import back2 from "../images/back2.jpg";
import back3 from "../images/back3.jpg";
import back4 from "../images/back4.jpg";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

class Head extends Component {
  state = {};
  render() {
    return (
      <div className="header-swiper" id="home">
        <Swiper
          loop={true}
          slidesPerView={1}
          direction="horizontal"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={back1} className="swiper-back" />

            <div className="swiper1-para animate__animated animate__backInUp animate__slow">
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  letterSpacing: "5px",
                }}
              >
                digital agency
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but{" "}
              </p>
              <p>the majority have suffered alteration.</p>
              <a
                href="#contact"
                className="btn btn-outline-light "
                style={{
                  padding: "16px 40px 16px 40px ",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                CONTACT US
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={back2} className="swiper-back" />

            <div className="swiper1-para">
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  letterSpacing: "5px",
                }}
              >
                digital agency
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but{" "}
              </p>
              <p>the majority have suffered alteration.</p>
              <a
                href="#contact"
                className="btn btn-outline-light "
                style={{
                  padding: "16px 40px 16px 40px ",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                CONTACT US
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={back3} className="swiper-back" />
            <div className="swiper1-para">
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  letterSpacing: "5px",
                }}
              >
                digital agency
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but{" "}
              </p>
              <p>the majority have suffered alteration.</p>
              <a
                href="#contact"
                className="btn btn-outline-light "
                style={{
                  padding: "16px 40px 16px 40px ",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                CONTACT US
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={back4} className="swiper-back" />
            <div className="swiper1-para">
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  letterSpacing: "5px",
                }}
              >
                digital agency
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but{" "}
              </p>
              <p>the majority have suffered alteration.</p>
              <a
                href="#contact"
                className="  btn btn-outline-light "
                style={{
                  padding: "16px 40px 16px 40px ",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                CONTACT US
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <Services />
        <About />
        <Portfolio />
        <Blog />
        <ContactUS />
      </div>
    );
  }
}

export default Head;
