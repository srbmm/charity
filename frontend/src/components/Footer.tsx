import React from 'react';
import {Link} from "react-router-dom";
// icons
import InstagramIcon from "/src/assets/icons/instagram.svg"
import WhatsappIcon from "/src/assets/icons/whatsapp.svg"
import TelegramIcon from "/src/assets/icons/telegram.svg"
import MapIcon from "/src/assets/icons/map.svg"
import PhoneIcon from "/src/assets/icons/phone.svg"
import EmailIcon from "/src/assets/icons/email.svg"
import LinkIcon from "/src/assets/icons/link.svg"

import useApi from "../hook/useApi";
import {getInfo, getLinks} from "../data/FooterInfo"
import Logo from "/src/assets/images/logo.png"

const Footer: React.FC = () => {
    const [isLoadInfo, dataInfo, isErrorInfo] = useApi(getInfo());
    const [isLoadLinks, dataLinks, isErrorLinks] = useApi(getLinks());
    if (isLoadInfo && isLoadLinks) {
        return (
            <div className="border-t pt-3 bg-[rgba(174, 203, 222, 0.1)]"
                 style={{backgroundColor: "rgba(96,112,154,0.22)"}}>
                <div className="flex flex-wrap justify-around p-10  py-20">
                    <div className="flex flex-col gap-2 justify-center">
                        {dataLinks.length ? <h3>لینک ها</h3> : ""}
                        {dataLinks.map(item => <Link key={item.title} href={item.link}>
                            <div className="flex items-center gap-2">
                                <span><img src={LinkIcon} /></span>
                                <span>{item.title}</span></div>
                        </Link>)}
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <span><img src={MapIcon} /></span>
                            <p>آدرس: {dataInfo.address}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span><img src={PhoneIcon}/></span>
                            <p>شماره تماس: {dataInfo.phone_number1}</p>
                        </div>
                        {dataInfo.phone_number2 ? <div className="flex items-center gap-2">
                            <span><img src={PhoneIcon}/></span>
                            <p>شماره تماس دوم: {dataInfo.phone_number2}</p>
                        </div> : ""}
                        <div className="flex items-center gap-2">
                            <span><img src={EmailIcon}/></span>
                            <p>ایمیل: {dataInfo.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        {dataInfo.instagram ?
                            <div className="flex items-center gap-2">
                                <span><img src={InstagramIcon}/></span>
                                <p>{dataInfo.instagram}</p></div> : ""}
                        {dataInfo.whatsapp ?
                            <div className="flex items-center gap-2">
                                <span><img src={WhatsappIcon}/></span>
                                <p>{dataInfo.whatsapp}</p></div> : ""}
                        {dataInfo.telegram ?
                            <div className="flex items-center gap-2">
                                <span><img src={TelegramIcon}/></span>
                                <p>{dataInfo.telegram}</p></div> : ""}
                    </div>
                    <div className="flex items-center">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
                <div className="bg-[#f5f5f5] text-center">copyright 2023©</div>
            </div>
        );
    } else {
        return <div></div>
    }
};

export default Footer;
