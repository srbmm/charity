import React from 'react';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className="border-t pt-3">
            <Box sx={{display: "flex", justifyContent: "space-around"}}>
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
            </Box>
            <div className="bg-black text-gray-400 text-center">copyright 2023©</div>
        </div>
    );
};

export default Footer;
