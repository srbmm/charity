import React from 'react';
import {ReactNode} from "../../types";
import Footer from "./Footer";
import Header from "./Header";

const HeaderAndFooter: React.FC<{
    children: ReactNode
}> = ({children}) => {
    return (
        <div className="flex flex-col h-screen justify-between w-full">
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default HeaderAndFooter;
