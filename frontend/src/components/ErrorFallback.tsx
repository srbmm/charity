import React from 'react';
import {HeaderAndFooter} from "./index";

const ErrorFallback = () => {
    return (
        <HeaderAndFooter>
            <div className="text-center text-red-500"> خطایی رخ داده است</div>
        </HeaderAndFooter>
    );
};

export default ErrorFallback;