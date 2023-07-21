import React from 'react';
import {Loading, Theme} from "../../components";
import {useParams} from "react-router-dom";
import useApi from "../../hook/useApi";
import {NotFound} from "../index";
import {getOneSupporter} from "../../data/Supporter";
import FakeAvatar from "/src/assets/images/fakeProfile.jpg"

const OneSupporter:React.FC = () => {
    const params = useParams()
    const [isLoad, supporter, error] = useApi(getOneSupporter(params.id))
    if (!isLoad) return <Loading />
    if (error.name !== undefined) return <NotFound/>
    return (
        <>
            <Theme>
                <div className="m-5 flex flex-col items-center gap-3">
                <img src={supporter.avatar ? supporter.avatar : FakeAvatar} className="w-40 h-40 rounded-full"/>
                    <h3>{supporter["full_name"]}</h3>
                    <p>{supporter["biography"]}</p>
                </div>
                <p>{supporter["description"]}</p>
            </Theme>
        </>
    );
};

export default OneSupporter;
