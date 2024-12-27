import React from 'react'
import BanImg from "../assets/bannir.png"
import Slider from "react-slick";



const Banner = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
       
        ],
        appendDots: dots => (
          <div
            style={{
              position:"absolute", 
              top:"50%",
              left:"60px",
              transform:"translateY(-50%)",
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              padding:"10px", 
              width: "60px",
              color: "transparent",
              fontSize:"20px",
              borderRight: "4px #fff solid"
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (
  <section className='pt-5'>
    <Slider {...settings}>
       <picture>
       <img src={BanImg} alt="" />
       </picture>
       <picture>
       <img src={BanImg} alt="" />
       </picture>
       <picture>
       <img src={BanImg} alt="" />
       </picture>
       <picture>
       <img src={BanImg} alt="" />
       </picture>
       </Slider>
  </section>
  )
}

export default Banner