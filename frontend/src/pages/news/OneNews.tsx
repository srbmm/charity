import React from 'react';
import {useParams} from "react-router-dom";
import {HeaderAndFooter, Loading} from "../../components";
import useApi from "../../hook/useApi";
import {getOneNews} from "../../data/News";
import {NotFound} from "../index";

const OneNews: React.FC = () => {
    const params = useParams()
    const [isLoad, news, error] = useApi(getOneNews(params.id))
    if (!isLoad) return <Loading/>
    if (error.name !== undefined) return <NotFound/>
    return (
        <HeaderAndFooter>
            <div className="p-5">
                <h1 className="text-2xl border-b p-2">{news.title}</h1>
                <div className="flex flex-col gap-4 justify-center p-5">
                    <div className="flex flex-wrap gap-2 justify-center">
                    <p className="p-5">{news.summary}</p>
                    <img src={news.avatar} className="w-96 rounded-xl"/>
                    </div>
                    <p className="p-5">{news.text}</p>
                </div>
            </div>
        </HeaderAndFooter>
    );
};

export default OneNews;
