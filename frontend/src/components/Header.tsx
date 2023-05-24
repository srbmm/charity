import React from 'react';
import {Link} from "react-router-dom";
import PAGES from "../constant/PAGES";
import {Box} from "@mui/material";

const Header: React.FC = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <Link to={PAGES.home.url}>{PAGES.home.label}</Link>
            <Link to={PAGES.news.url}>{PAGES.news.label}</Link>
        </Box>
    );
};

export default Header;
