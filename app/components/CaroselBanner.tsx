"use client"
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CaroselBanner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/IMAX_Priya_launch_5620.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Unlimited_Offer_8445.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/THE_HAUNTED_HOUR_Offer_3951.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/MyGlamm_Offer_8173.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00018732.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Airtel_New_Offer_9006.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00022392.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/MobiKwik_2882.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Kotak-Welcome_back__1738.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CaroselBanner;
