import React from 'react';
import {Link} from "react-router-dom";

const More = ({to, children, className}) => {
    const color = "#313864"
    return (
        <div className="w-full flex justify-center items-center">
        <Link to={to} className={"bg-[#3F497F] w-32 py-1 px-2 text-white rounded text-center cursor-pointer hover:bg-[#313864FF] transition " + className}>
            {children}
        </Link>
        </div>
    );
};

export default More;