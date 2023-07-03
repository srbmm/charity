// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import sampleNews from "../assets/images/sampleNews.jpg";
import {NewsBox} from "../pages/news/News";
import React from "react";
import {Navigation} from "swiper/modules";

export default ({data}) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
        >
            {data.map(item => <SwiperSlide><NewsBox news={item} key={item.id}></NewsBox> </SwiperSlide>)}
        </Swiper>
    );
};