import React from 'react';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className="border-t pt-3 bg-[#E5E5E6]">
            <div className="flex justify-around p-10">
                <Box sx={{display: "flex", gap: 3}}>
                    <Box sx={{display: 'flex', flexDirection: "column", color: "", gap: 1.5}}>
                        <Link>Link</Link>
                        <Link>Link</Link>
                        <Link>Link</Link>
                        <Link>Link</Link>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: "column", color: "", gap: 1.5}}>
                        <Link>Link</Link>
                        <Link>Link</Link>
                        <Link>Link</Link>
                        <Link>Link</Link>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <p>آدرس:</p>
                    <p>شماره تلفن:</p>
                    <p>ایمیل:</p>
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    لوگو
                </Box>
            </div>
            <div className="bg-white text-center">copyright 2023©</div>
        </div>
    );
};

export default Footer;
