import React from 'react';
import {Loading, Theme} from "../../../components";
import useApi from "../../../hook/useApi";
import getIntroduction from "../../../data/Introduction";
import {Link} from "flowbite-react";

const Statute: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("statute"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div className="text-center">
                    <h1 className="text-center mb-10">{data.title}</h1>
                    <a href={data.file} target="_blank" className="border border-sky-400 hover:bg-sky-400 p-2 rounded m-auto text-center">دانلود اساسنامه</a>
                    <p className="mt-10 text-right">{data.text}</p>
                </div>
            </Theme>
        </>
    );
};

export default Statute;
