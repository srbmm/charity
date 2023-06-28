import React from 'react';
import {Box} from "@mui/material";
import {Loading, Theme} from "../../../components";
import useGetData from "../../../hook/useGetData";
import getIntroduction from "../../../data/Introduction";

const License = ({data}) => {
    return (
        <div>
            <div className="flex gap-3 justify-center items-center">
                <h1 className="text-center">{data.title}</h1>
                <a href={data.file} target="_blank" className="border border-sky-400 hover:bg-sky-400 p-2 rounded text-center">نمایش مجوز</a>
            </div>
        </div>
    )
}
const Licenses: React.FC = () => {
    const [isLoad, data, err] = useGetData(getIntroduction("permissions"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-5">
                    {data.map(item => <License data={item}/>)}
                </div>
            </Theme>
        </>
    );
};

export default Licenses;
