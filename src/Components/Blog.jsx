import { Component } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";
import Footer from "./footer";
class Blog extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="blog-head" id="blog">
          <h1>Latest News</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,{" "}
          </p>
          <p>but the majority have suffered alteration.</p>
        </div>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            200: {
              width: 400,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          style={{ height: "100%", paddingBottom: "80px" }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide id="slide1">
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>Getting tickets to the big show</h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide2">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>A big ticket gone to be an interesting </h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide3">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>Getting tickets to the big show</h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide4">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>Getting tickets to the big show</h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide5">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>A big ticket gone to be an interesting </h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide6">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>Getting tickets to the big show</h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide7">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>Getting tickets to the big show</h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide8">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>Getting tickets to the big show</h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide9">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>Getting tickets to the big show</h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide10">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>Development</p>
              <h2>Getting tickets to the big show</h2>
              <button className="btn btn-outline-light"> READ MORE</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default Blog;
