import React from 'react';
import {Box} from "@mui/material";
import {Loading, Theme} from "../../../components";
import useGetData from "../../../hook/useGetData";
import getIntroduction from "../../../data/Introduction";

const Chart: React.FC = () => {
    const [isLoad, data, err] = useGetData(getIntroduction("chart"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <img src={data.file} className="w-full" />
            </Theme>
        </>
    );
};

export default Chart;
