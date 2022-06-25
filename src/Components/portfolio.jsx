import { Component } from "react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "./footer";
import { Link } from "react-router-dom";
class Portfolio extends Component {
  state = {};
  render() {
    return (
      <>
        <Swiper
          id="portfolio"
          style={{
            boxShadow: " rgba(100, 100, 111, 0.2) 10px 10px 29px 10px;",
            backgroundColor: "#026873",
            position: "relative",
            paddingTop: "300px",
            height: "52rem",
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            200: {
              width: 400,
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="potfolio-head">
            <h1>Our Portfolio</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,{" "}
            </p>
          </div>
          <SwiperSlide id="swip1-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{
                  marginTop: "15px",
                }}
              >
                <a href="#aboutNext"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swip2-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "15px" }}
              >
                <a href="#aboutNext"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swip3-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "15px" }}
              >
                <a href="#aboutNext"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swip4-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "15px" }}
              >
                {" "}
                <a href="#aboutNext"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swip5-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "15px" }}
              >
                <a href="#aboutNext"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swip6-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "15px" }}
              >
                <a href="#aboutNext"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swip7-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "15px" }}
              >
                <a href="#aboutNext"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="swip8-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "15px" }}
              >
                <a href="#about"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide id="swip9-portf">
            <div className="portf-content">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "15px" }}
              >
                <a href="#about"> CASE STUDY</a>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default Portfolio;
