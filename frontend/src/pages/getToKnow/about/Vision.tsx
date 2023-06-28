import React from 'react';
import {Box} from "@mui/material";
import {Loading, Theme} from "../../../components";
import getIntroduction from "../../../data/Introduction";
import useGetData from "../../../hook/useGetData";

const Vision: React.FC = () => {
    const [isLoad, data, err] = useGetData(getIntroduction("vision"))
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
