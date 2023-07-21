import React from "react";

const DownloadCard = ({title,href,label}) => {
    return (
            <div className="flex gap-3 justify-center items-center border-b border-gray-3/home/srbmm/Downloads/logo.png00 p-2">
                <p className="text-center ltr">{title}</p>
                <a href={href} target="_blank" className="text-[#1865F2] hover:text-blue-800 p-2 transition rounded text-center">{label}</a>
            </div>
    )
}
export default DownloadCard;