import React from 'react';
import {ReactNode} from "../../types";

const HeaderAndFooter:React.FC<{
    children: ReactNode,
    title: string
}> = ({children, title}) => {
    return (
        <>
            <HeaderAndFooter>
                <h1>{title}</h1>
                {children}
            </HeaderAndFooter>
        </>
    );
};

export default HeaderAndFooter;
