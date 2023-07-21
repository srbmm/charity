import React from 'react';
import {DownloadCard, Loading, Theme} from "../../../../components";
import useApi from "../../../../hook/useApi";
import getIntroduction from "../../../../data/Introduction";

const FinancialStatements: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("financial"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-4">
                    {data.map(item => <DownloadCard title={item.title} href={item.file} label="دانلود گزارش" /> )}
                </div>
            </Theme>
        </>
    );
};

export default FinancialStatements;
