import React from 'react';
import {ReactNode} from "../../types";
import Header from "./Header";
import Footer from "./Footer";

const HeaderAndFooter:React.FC<{
    children: ReactNode
}> = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default HeaderAndFooter;
