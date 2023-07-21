import React from 'react';
import {Button} from 'flowbite-react'
import COlOR from "../constant/COLOR";

const SecondaryBtn:React.FC = (props) => {
    return (
        <Button onClick={props.onClick} {...props} style={{...props.style, backgroundColor: COlOR.secondary}} className="text-slate-600 hover:!bg-yellow-300 transition h-auto px-4 py-0 rounded-[20px]" variant="contained">
            {props.children}
        </Button>
    );
};

export default SecondaryBtn;
