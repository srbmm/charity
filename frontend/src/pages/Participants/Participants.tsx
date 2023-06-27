import React from 'react';
import {Box} from "@mui/material";
import {Theme} from "../../components";

const ParticipantCard: React.FC = ({participant}) => {

    return (
        <div className="flex flex-col gap-2">
            <img className="h-80 w-56 object-cover rounded" src={participant.avatar}/>
            <p className="text-xl">{participant.name}</p>
            <p>{participant.text}</p>
            <p className="lg:text-xs text-gray-600">در تاریخ : {participant.date}</p>
        </div>
    )
}

const Participants: React.FC = () => {
    return (
        <>
            <Theme>
                <Box>صفحه مورد نظر به زودی تکمیل میگردد</Box>
            </Theme>
        </>
    );
};

export default Participants;
export {ParticipantCard}