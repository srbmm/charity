import React from 'react';
import {ReactNode} from "../../types";
import Footer from "./Footer";
const Header = React.lazy(() => import("./Header"))

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
