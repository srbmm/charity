import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useApi from "../../hook/useApi";
import {NotFound} from "../index";
import {HeaderAndFooter, Loading} from "../../components";
import {getOneSupportTopic} from "../../data/SupportTopic";
import fakeImage from "/src/assets/images/fakeNews.jpg"
import PAGES from "../../constant/PAGES";
import SecondaryBtn from "../../components/SecondaryBtn";

const OneSupportTopic = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [isLoad, data, error] = useApi(getOneSupportTopic(params.id))
    if (!isLoad) return <Loading/>
    if (error.name !== undefined) return <NotFound/>
    const color = data.progress >= 70 ? "22A60D" : data.progress >= 40 ? "FCC400" : "9E0F17"
    return (
        <HeaderAndFooter>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-4">
                    <img src={data.avatar ? data.avatar : fakeImage} className="w-40 h-40 rounded-full"/>
                    <h1 className="text-xl">{data.title}</h1>
                    <h2>
                        <span>بودجه: </span>
                        <span>{(+data.budget).toLocaleString()}</span>
                    </h2>
                    <div className="flex gap-6">
                        <div className="flex gap-1">
                            <span className={`text-[#${color}]`}>{data.progress}</span>
                            <span className={`text-[#${color}]`}>%</span>
                        </div>
                    </div>
                </div>
                <SecondaryBtn onClick={() => {
                    navigate("/" + PAGES.helpMethod.url + "/" + PAGES.cash.url, {state: data.topic})
                }}>حمایت از این پروژه</SecondaryBtn>
            </div>
            <div className="p-5">{data.description}</div>
        </HeaderAndFooter>
    );

};

export default OneSupportTopic;