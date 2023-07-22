import React from 'react';
import {Loading, Theme} from "../../../../components";
import useApi from "../../../../hook/useApi";
import getIntroduction from "../../../../data/Introduction";
import {DownloadCard} from "../../../../components";

const AuditReport: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("audit"));
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

export default AuditReport;
