import React from 'react';
import {Loading, Theme} from "../../../components";
import useApi from "../../../hook/useApi";
import getIntroduction from "../../../data/Introduction";

const History: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("history"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div>
                    <h1 className="text-center">{data.title}</h1>
                    <img src={data.avatar} className="w-96 rounded m-auto"/>
                    <p className="mt-10">{data.text}</p>
                </div>
            </Theme>
        </>
    );
};

export default History;
