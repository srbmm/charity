import React from 'react';
import {Loading, Theme} from "../../../components";
import getIntroduction from "../../../data/Introduction";
import useApi from "../../../hook/useApi";

const Vision: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("vision"))
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

export default Vision;
