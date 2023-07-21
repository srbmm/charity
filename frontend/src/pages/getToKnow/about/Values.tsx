import React from 'react';
import {Loading, Theme} from "../../../components";
import useApi from "../../../hook/useApi";
import getIntroduction from "../../../data/Introduction";

const Values: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("values"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div className="text-center">
                    <h1 className="text-center mb-10">{data.title}</h1>
                    <p className="mt-10 text-right">{data.text}</p>
                </div>
            </Theme>
        </>
    );
};

export default Values;
