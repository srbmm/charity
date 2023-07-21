import React from 'react';
import {Link} from "react-router-dom";

const HemayatBox = ({to, src, label}) => {

    return (
        <Link to={to} className="hover:text-[#376FFF] text-[#213D70] transition hover:translate-y-1 w-full md:w-1/3 xl:w-1/4 flex flex-col gap-6 bg-white group p-16 rounded-lg">
            <div className="bg-[#F5F5F5] p-5 rounded-full flex justify-center">
                <img src={src} className="w-36 h-36 rounded-full"/>

            </div>
            <p className="text-center block group-hover:translate-y-2 transition">{label}</p>
        </Link>
    );
};

export default HemayatBox;