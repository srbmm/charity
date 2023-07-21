// options with default values
import {useState} from "react";

const options = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
};

const DropDown = ({label, children, toLeft = false}) => {
    const [show, setShow] = useState(false);
    const showMenu = event => {
        setShow(true)
    }
    const hideMenu = () => setShow(false)
    return (
        <>
            <div onMouseOver={showMenu} onMouseLeave={hideMenu} className="relative w-full md:w-auto">
                <button className="font-medium rounded text-sm text-center inline-flex items-center hover:bg-[#90CAF9] p-1 transition w-full text-center"
                        type="button">
                    <div className="flex gap-2 items-center">
                    {label}
                    {toLeft ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                   className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    }

                    </div>
                </button>
                <div style={{display: show ? "block" : "none"}}
                     className={`z-10 absolute ${toLeft ? "translate-x-[-90px] translate-y-[-30px]" : ""} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"`}>
                    {children}
                </div>
            </div>
        </>
    )
}
export default DropDown;