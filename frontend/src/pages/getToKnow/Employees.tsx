import React from 'react';
import {Loading, Theme} from "../../components";
import useApi from "../../hook/useApi";
import getIntroduction from "../../data/Introduction";
import EmployeesCard from "../../components/EmployeesCard";

const Employees:React.FC = () => {
    const [isLoad, data, err] = useApi(getIntroduction("partners"));
    if (!isLoad) return <Loading />
    return (
        <>
            <Theme>
                <div className="flex flex-wrap gap-4 justify-around">
                {data.map((data, index) => <EmployeesCard key={index} data={data} />)}
                </div>
            </Theme>
        </>
    );
};

export default Employees;
