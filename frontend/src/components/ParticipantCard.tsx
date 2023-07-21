import React from "react";
import {Card} from "flowbite-react";
import {Link} from "react-router-dom";
import FakeAvatar from "/src/assets/images/fakeProfile.jpg"
import PAGES from "../constant/PAGES";

const ParticipantCard: React.FC = ({participant}) => {
    return (
        <Link to={"/" + PAGES.supporter.url + "/" + participant.id} className="w-full md:w-1/4">
            <Card className="flex flex-col gap-2 group">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2 p-1 border-l ">
                        <img className="h-24 w-24 object-cover group-hover:scale-95 transition rounded"
                             src={participant.avatar ? participant.avatar : FakeAvatar}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xl">{participant["full_name"]}</p>
                        <p>{participant["biography"]}</p>
                        <p className="text-[#213D70]">
                            اطلاعات بیشتر...
                        </p>
                    </div>
                </div>
            </Card>
        </Link>
    )
}
export default ParticipantCard;