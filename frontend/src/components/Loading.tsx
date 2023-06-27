import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-white">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
