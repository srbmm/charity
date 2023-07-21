import React from 'react';
import {useParams} from "react-router-dom";
import useApi from "../../hook/useApi";
import {NotFound} from "../index";
import {HeaderAndFooter, Loading} from "../../components";
import fakeImage from "/src/assets/images/fakeNews.jpg"
import {getOneProject} from "../../data/Project";

const OneProject = () => {
    const params = useParams()
    const [isLoad, data, error] = useApi(getOneProject(params.id))
    if (!isLoad) return <Loading/>
    if (error.name !== undefined) return <NotFound/>
    const color = data.state == "done" ? "22A60D" : data.state == "doing" ? "FCC400" : "9E0F17"
    const text = data.state == "done" ? "انجام شده" : data.state == "doing" ? "در حال انجام" : "قابل انجام"
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
                            <span className={`text-[#${color}]`}>{text}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">{data.description}</div>
        </HeaderAndFooter>
    );

};

export default OneProject;