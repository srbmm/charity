import React from 'react';
import {Loading, Theme} from "../../../components";
import useApi from "../../../hook/useApi";
import getIntroduction from "../../../data/Introduction";

const Chart: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("chart"));
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
