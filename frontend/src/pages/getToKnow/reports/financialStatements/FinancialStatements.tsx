import React from 'react';
import {Loading, Theme} from "../../../../components";
import useGetData from "../../../../hook/useGetData";
import getIntroduction from "../../../../data/Introduction";

const Financial = ({data}) => {
    return (
        <div>
            <div className="flex gap-3 justify-center items-center">
                <h1 className="text-center">{data.title}</h1>
                <a href={data.file} target="_blank"
                   className="border border-sky-400 hover:bg-sky-400 p-2 rounded text-center">دانلود گزارش</a>
            </div>
        </div>
    )
}
const FinancialStatements: React.FC = () => {
    const [isLoad, data, err] = useGetData(getIntroduction("financial"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-4">
                    {data.map(item => <Financial data={item}/>)}
                </div>
            </Theme>
        </>
    );
};

export default FinancialStatements;
