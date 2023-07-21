import React from 'react';
import {Loading, Theme} from "../../components";
import useApi from "../../hook/useApi";
import {getSupporterTopic} from "../../data/SupportTopic";
import SupportCard from "../../components/SupportCard";

const AllSupportTopic:React.FC = () => {
    const [isLoad, data, error] = useApi(getSupporterTopic("all"))
    if (!isLoad) return <Loading />
    return (
        <>
            <Theme>
                <div className="flex flex-col gap-2">
                    {data.map((item, index) => <SupportCard revesre={index % 2 == 0} key={item.id} data={item}/>)}
                </div>
            </Theme>
        </>
    );
};

export default AllSupportTopic;
