import React, {useState} from 'react';
import {HeaderAndFooter, NewsSlider, PhoneNewsSlider, ProfileCard, Theme} from '../components'
import hemayat1 from './../assets/images/hemayat1.jpg'
import hemayat2 from './../assets/images/hemayat2.jpg'
import hemayat3 from './../assets/images/hemayat3.jpg'
import hemayat4 from './../assets/images/hemayat4.jpg'
import hemayat5 from './../assets/images/hemayat5.jpg'
import hemayat6 from './../assets/images/hemayat6.jpg'
import person1 from './../assets/images/person1.jpg'
import person2 from './../assets/images/person2.jpg'
import person3 from './../assets/images/person3.jpg'
import main from './../assets/images/main.jpg'
import {ParticipantCard} from "./Participants/Participants";
import useGetData from '../hook/useGetData';
import { getSelectedNews } from '../data/News';
const Root: React.FC = () => {
    const [sliderData, setSliderData] = useState([])
    const  [isLoadNews, dataNews, errorNews] = useGetData(getSelectedNews())
    console.log(dataNews)
    return (
        <>
            <HeaderAndFooter>
                <div className="m-10 md:pr-56 md:pl-56">
                    {/*Main Slider*/}
                    <div><img src={main} className="w-full object-cover h-96"/></div>

                    {/*Hemayat ha*/}
                    <div className="mt-20 mb-10">
                        <div className="flex flex-wrap justify-around">
                            <div>
                                <img src={hemayat1} className="w-56 h-56 rounded-full"/>
                                <p className="text-center">حمایت ورزشی</p>
                            </div>
                            <div>
                                <img src={hemayat2} className="w-56 h-56 rounded-full"/>
                                <p className="text-center">حمایت از دانشجویان</p>
                            </div>
                            <div>
                                <img src={hemayat3} className="w-56 h-56 rounded-full"/>
                                <p className="text-center">حمایت فرهنگی</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-around">
                            <div>
                                <img src={hemayat4} className="w-56 h-56 rounded-full"/>
                                <p className="text-center">حمایت پژوهشی</p>
                            </div>
                            <div>
                                <img src={hemayat5} className="w-56 h-56 rounded-full"/>
                                <p className="text-center">حمایت عمرانی</p>
                            </div>
                            <div>
                                <img src={hemayat6} className="w-56 h-56 rounded-full"/>
                                <p className="text-center">حمایت آموزشی</p>
                            </div>
                        </div>
                    </div>

                    {/*News*/}
                    <div className="mt-20">
                        <h1 className="text-2xl text-center">اخبار</h1>
                        <div className="hidden md:block">
                        {dataNews?.length ? <NewsSlider  data={dataNews}/> : ""}
                        </div>
                        <div className="block md:hidden">
                            {dataNews?.length ? <PhoneNewsSlider  data={dataNews}/> : ""}
                        </div>
                    </div>
                    {/*Hamian*/}
                    <div className="mt-20">
                        <h1 className="text-center text-2xl">حامیان بنیاد</h1>
                        <div className="flex flex-wrap m-2 gap-5 justify-around">
                            <ParticipantCard participant={{
                                avatar: person1,
                                name: "کیان عابدی",
                                text: "کمک به مبلغ ۷۰۰ میلیون تومان به خوابگاه",
                                date: "1402/10/05"
                            }}/>
                            <ParticipantCard participant={{
                                avatar: person2,
                                name: "کیان عابدی",
                                text: "کمک به مبلغ ۷۰۰ میلیون تومان به خوابگاه",
                                date: "1402/10/05"
                            }}/>
                            <ParticipantCard participant={{
                                avatar: person3,
                                name: "کیان عابدی",
                                text: "کمک به مبلغ ۷۰۰ میلیون تومان به خوابگاه",
                                date: "1402/10/05"
                            }}/>
                        </div>
                    </div>
                </div>

            </HeaderAndFooter>
        </>
    );
};

export default Root;
