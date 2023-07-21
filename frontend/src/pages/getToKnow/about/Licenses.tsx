import React from 'react';
import {Loading, Theme} from "../../../components";
import useApi from "../../../hook/useApi";
import getIntroduction from "../../../data/Introduction";
import {DownloadCard} from "../../../components";
const Licenses: React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("permissions"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-5">
                    {data.map(item => <DownloadCard title={item.title} href={item.file} label="نمایش مجوز"/>)}
                </div>
            </Theme>
        </>
    );
};

export default Licenses;
