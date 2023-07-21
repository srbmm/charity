import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import fakeNews from "/src/assets/images/fakeNews.jpg"
import PAGES from "../constant/PAGES";

const ProjectCard = ({data, revesre}) => {
    const color = data.state == "done" ? "22A60D" : data.state == "doing" ? "FCC400" : "9E0F17"
    const text = data.state == "done" ? "انجام شده" : data.state == "doing" ? "در حال انجام" : "قابل انجام"
    return (
        <div className={revesre ? "ltr" : ""}>
            <div className="text-right flex items-center justify-around border-b p-5 border-gray-300 xl:px-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#0C276A] text-xl">{data.title}</h1>
                    <div className="rtl flex gap-2">
                        <span>{(+data.budget).toLocaleString()}</span>
                        <span className="text-gray-500 text-sm">ریال</span>
                    </div>
                    <Link to={"/" + PAGES.projects.url + "/" + data.id} className="text-[#0B48E2] hover:text-blue-800">اطلاعات بیشتر</Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-6">
                        <div className="flex gap-1">
                            <span className={`text-[#${color}]`}>{text}</span>
                        </div>
                        <div className="h-5 w-5 rounded-full" style={{backgroundColor: "#"+color}}></div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                    <img className="w-36 h-36 bg-white rounded-full object-cover" src={data.avatar ? data.avatar : fakeNews}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;