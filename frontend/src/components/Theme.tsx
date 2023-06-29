import React from 'react';
import {HeaderAndFooter} from './index'
import {useHref} from "react-router-dom";
import PAGES from "../constant/PAGES";
const Theme: React.FC = ({children, className}) => {
    let href = useHref("")
    if (href !== "/")
        href = href.split("/").at(-1)
    console.log(href)
    const title = Object.values(PAGES).find(({url}) => url === href)

    return (
        <>
            <HeaderAndFooter>
                <div style={{margin: "1.5rem"}} className={className}>
                    {title ? <h1 style={{borderBottom: '1px solid #ccc', marginBottom: "2rem"}}>{title.label} </h1>:""}
                    {children}
                </div>
            </HeaderAndFooter>
        </>
    );
};

export default Theme;
