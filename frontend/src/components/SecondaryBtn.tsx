import React from 'react';
import {Button} from 'flowbite-react'
import COlOR from "../constant/COLOR";

const SecondaryBtn:React.FC = (props) => {
    return (
        <Button onClick={props.onClick} className="text-[#fdfdfd] bg-[#3F497F] hover:text-[#3F497F] hover:bg-[rgba(11,72,226,0.3)] transition h-auto px-4 py-0 rounded-[12px]" variant="contained">
            {props.children}
        </Button>
    );
};

export default SecondaryBtn;
