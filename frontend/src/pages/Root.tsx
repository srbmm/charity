import React, {useState} from 'react';
import {HeaderAndFooter, NewsSlider, HemayatBox, ParticipantCard} from '../components'
import hemayat1 from './../assets/images/hemayat1.png'
import hemayat2 from './../assets/images/hemayat2.png'
import hemayat3 from './../assets/images/hemayat3.png'
import hemayat4 from './../assets/images/hemayat4.png'
import hemayat5 from './../assets/images/hemayat5.png'
import hemayat6 from './../assets/images/hemayat6.png'
import main from './../assets/images/main.jpg'
import useApi from '../hook/useApi';
import {getSelectedNews} from '../data/News';
import {getSelectSupporter} from "../data/Supporter";
import PAGES from "../constant/PAGES";

const Root: React.FC = () => {
    const [isLoadNews, dataNews, errorNews] = useApi(getSelectedNews())
    const [isLoadSupporter, dataSupporter, errorSupporter] = useApi(getSelectSupporter())
    return (
        <>
            <HeaderAndFooter>
                <div>
                    {/*Main Slider*/}
                    <div className="bg-[#34CA1C4D]">
                    <div className="xl:pr-20 xl:pl-20 md:pr-10 md:pl-10 mx-10 pb-20 flex flex-wrap pt-10 justify-evenly gap-6">
                        <div className="w-96 flex flex-col gap-6">
                            <h1 className="text-xl">موضوع</h1>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                        <img src={main} className="rounded-xl object-cover w-full md:w-1/3"/>
                    </div>
                    </div>
                    {/*Hemayat ha*/}
                    <div className="mb-10 bg-[#f5f5f5] p-10 xl:pr-20 xl:pl-20 md:pr-10 md:pl-10 flex flex-col gap-2">
                        <div className="flex flex-wrap justify-center gap-2">
                            <HemayatBox src={hemayat1} to={PAGES.helpTopic.url + "/" + PAGES.sports.url} label="حمایت ورزشی" />
                            <HemayatBox src={hemayat2} to={PAGES.helpTopic.url + "/" + PAGES.supporting_students.url} label="حمایت از دانشجویان" />
                            <HemayatBox src={hemayat3} to={PAGES.helpTopic.url + "/" + PAGES.cultural.url} label="حمایت فرهنگی" />
                            <HemayatBox src={hemayat4} to={PAGES.helpTopic.url + "/" + PAGES.research.url} label="حمایت پژوهشی" />
                            <HemayatBox src={hemayat5} to={PAGES.helpTopic.url + "/" + PAGES.construction.url} label="حمایت عمرانی" />
                            <HemayatBox src={hemayat6} to={PAGES.helpTopic.url + "/" + PAGES.educational.url} label="حمایت آموزشی" />
                        </div>
                    </div>

                    {/*News*/}
                    {dataNews.length ?
                        <div className="mt-20 xl:pr-20 xl:pl-20 md:pr-10 md:pl-10">
                            <h1 className="text-2xl text-center p-5 text-[#213D70] mb-5">اخبار</h1>
                            <div className="hidden xl:block">
                                <NewsSlider number={3} data={dataNews}/>
                            </div>
                            <div className="hidden xl:hidden md:block">
                                <NewsSlider number={2} data={dataNews}/>
                            </div>
                            <div className="block md:hidden xl:hidden">
                                <NewsSlider number={1} data={dataNews}/>
                            </div>
                        </div>
                        : ""}

                    {/*Hamian*/}
                    <div className="pb-16 pt-16 mt-20 xl:pr-20 xl:pl-20 md:pr-10 md:pl-10 bg-[#f5f5f5]">
                        <h1 className="text-center text-2xl mb-5">حامیان بنیاد</h1>
                        <div className="flex flex-wrap m-2 gap-5 justify-around">
                            {dataSupporter.map(participant => <ParticipantCard participant={participant}/>)}
                        </div>
                    </div>
                </div>

            </HeaderAndFooter>
        </>
    );
};

export default Root;
