import React from 'react';
import useApi from "../../../hook/useApi";
import getMembers from "../../../data/Members";
import MemberCard from "../../../components/MemberCard";
import {Loading, Theme} from "../../../components";

const MembersOfTheFoundingBoard: React.FC = () => {
    const [isLoad, data, err] = useApi(getMembers("members_of_the_founding_board"));
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

export default MembersOfTheFoundingBoard;
