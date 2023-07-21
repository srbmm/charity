import React from 'react';
import {Loading, ParticipantCard, Theme} from "../../components";
import useApi from "../../hook/useApi";
import {getSupporters} from "../../data/Supporter";

const Supporter: React.FC = () => {
    const [isLoad, data, err] = useApi(getSupporters());
    if (!isLoad) return <Loading />
    return (
        <>
            <Theme>
                <div className="flex flex-wrap justify-around">
                    {data.map(item => <ParticipantCard participant={item} />)}
                </div>
            </Theme>
        </>
    );
};

export default Supporter;
