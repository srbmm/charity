import React from 'react';
import {Button} from 'flowbite-react'
import COlOR from "../constant/COLOR";

const SecondaryBtn:React.FC = (props) => {
    return (
        <Button {...props} style={{...props.style, backgroundColor: COlOR.primary, color: COlOR.white,
            borderBottomRightRadius: "0", borderTopRightRadius: "0"}} variant="contained">
            {props.children}
        </Button>
    );
};

export default SecondaryBtn;
