import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

const Section4 = () => {
    const[s4] = useState([
        {
            img: "/images/section-4/Image.png",
            text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            name: "Mike taylor",
            location: "Lahore, Pakistan"
        },
        {
            img: "/images/section-4/Image.png",
            text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            name: "Chris Thomas",
            location: "CEO of Red Button"
        }
    ])
    return (
        <section id="section_4">
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-xl-6 mb-5 mb-xl-0">
                        <Swiper spaceBetween={30} pagination={{
                            "clickable": true
                        }} className="mySwiper1">
                            {
                                [...new Array(3)].map(i => {
                                    return (
                                        <SwiperSlide>
                                            <div className="title">
                                                <p style={{ textTransform: "uppercase" }}>Testimonials</p>
                                                <h1>What people say about Us.</h1>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="col-12 col-xl-6 px-0 px-sm-2">
                        <div className="vertical_carousel">
                            <Swiper spaceBetween={30}  navigation={true} pagination={{"clickable": true }} className="mySwiper2">
                                {
                                    s4.map((s, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <div className="card border-0">
                                                    <img src={s.img} alt={"user_" + i} />
                                                    <div className="card-body">
                                                        <p>{s.text}</p>
                                                        <h5>{s.name}</h5>
                                                        <h6>{s.location}</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Section4
