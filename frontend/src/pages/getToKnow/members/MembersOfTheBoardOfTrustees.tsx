import React from 'react';
import {Loading, Theme} from "../../../components";
import MemberCard from "../../../components/MemberCard";
import useApi from "../../../hook/useApi";
import getMembers from "../../../data/Members";

const MembersOfTheBoardOfTrustees: React.FC = () => {
    const [isLoad, data, err] = useApi(getMembers("members_of_the_board_of_trustees"));
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

export default MembersOfTheBoardOfTrustees;
