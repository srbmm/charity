import React from 'react';
import {useParams} from "react-router-dom";
import {HeaderAndFooter} from "../../../components";

const OneNews:React.FC = () => {
    const params = useParams()
    return (
        <HeaderAndFooter>
            <h1>{params.id}</h1>
        </HeaderAndFooter>
    );
};

export default OneNews;
