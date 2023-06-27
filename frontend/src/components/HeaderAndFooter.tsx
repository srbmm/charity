import React from 'react';
import {ReactNode} from "../../types";
import Header from "./Header";
import Footer from "./Footer";

const HeaderAndFooter: React.FC<{
    children: ReactNode
}> = ({children}) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default HeaderAndFooter;
