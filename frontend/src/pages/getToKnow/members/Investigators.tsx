import React from 'react';
import {Loading, Theme} from "../../../components";
import useApi from "../../../hook/useApi";
import getMembers from "../../../data/Members";
import MemberCard from "../../../components/MemberCard";

const Investigators: React.FC = () => {
    const [isLoad, data, err] = useApi(getMembers("investigators"));
    if (!isLoad) return <Loading/>
    return (
        <>
            <Theme>
                <div className="flex flex-wrap gap-4 justify-around">
                    {data.map(data => <MemberCard data={data}/>)}
                </div>
            </Theme>
        </>
    );
};

export default Investigators;
