import React from 'react';
import {useParams} from "react-router-dom";
import {HeaderAndFooter, Loading} from "../../components";
import useGetData from "../../hook/useGetData";
import {getOneNews} from "../../data/News";
import {NotFound} from "../index";

const OneNews: React.FC = () => {
    const params = useParams()
    const [isLoad, news, error] = useGetData(getOneNews(params.id))
    if (!isLoad) return <Loading/>
    if (error.name !== undefined) return <NotFound/>
    return (
        <HeaderAndFooter>
            <div className="p-5">
                <h1 className="text-2xl border-b p-2">{news.title}</h1>
                <div className="flex flex-wrap justify-center p-5">
                    <p className="p-5">{news.summary}</p>
                    <img src={news.avatar} className="w-96 rounded-xl"/>
                    <p className="p-5">{news.text}</p>
                </div>
            </div>
        </HeaderAndFooter>
    );
};

export default OneNews;
