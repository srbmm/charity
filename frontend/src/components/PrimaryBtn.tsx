import React from 'react';
import {Button} from 'flowbite-react'
import COLOR from "../constant/COLOR";
const PrimaryBtn:React.FC = (props) => {
    return (
        <Button {...props} style={{...props.style}} className={`bg-[${COLOR.primary}] text-[${COLOR.white}]`} variant="contained">
            {props.children}
        </Button>
    );
};

export default PrimaryBtn;
