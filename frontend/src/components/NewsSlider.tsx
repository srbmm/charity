// Import Swiper React members
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import sampleNews from "../assets/images/sampleNews.jpg";
import {NewsCard as NewsBox} from "/src/components";
import React from "react";
import {Navigation} from "swiper/modules";

export default ({data, number}) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={number}
            navigation={true}
            modules={[Navigation]}
        >
            {data.map(item => <SwiperSlide><NewsBox news={item} key={item.id}></NewsBox> </SwiperSlide>)}
        </Swiper>
    );
};