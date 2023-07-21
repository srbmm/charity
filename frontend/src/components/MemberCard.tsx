import React from 'react';
import {Card} from "flowbite-react";
import profile from "/src/assets/images/fakeProfile.jpg"

const MembersCard = ({data}) => {
    return (
        <Card className="group flex md:h-72 w-full md:w-3/12">
            <h3 className="font-bold text-xl">{data["full_name"]}</h3>
            <div className="flex h-full gap-4">
                <img src={data.avatar ? data.avatar : profile} className="group-hover:translate-y-3 transition rounded-full w-20 h-20 object-cover self-start"/>
                <p className="overflow-y-auto">{data["biography"]}</p>
            </div>
        </Card>
    );
};

export default MembersCard;