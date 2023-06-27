import React from 'react';
import {Button} from '@mui/material'
import COlOR from "../constant/COLOR";

const SecondaryBtn:React.FC = (props) => {
    return (
        <Button {...props} style={{...props.style, backgroundColor: COlOR.secondary, color: COlOR.white}} variant="contained">
            {props.children}
        </Button>
    );
};

export default SecondaryBtn;
