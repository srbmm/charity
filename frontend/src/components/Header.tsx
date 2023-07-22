import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import PAGES from "../constant/PAGES";
import {Navbar} from "flowbite-react";
import DropDown from "./DropDown";
import SecondaryBtn from "./SecondaryBtn";
import Logo from "/src/assets/images/codesandbox.svg"
const HemayatBtn = () => {
    const navigate = useNavigate()
    return (

            <SecondaryBtn onClick={() => navigate("/" + PAGES.helpMethod.url + "/" + PAGES.cash.url)}>حمایت</SecondaryBtn>

    )
}
const menuItemClass = "text-[#1865F2] hover:text-blue-800 transition p-1 rounded w-full md:w-auto"
const Header: React.FC = () => {
    return (
            <div className="flex items-center justify-between pt-1 w-full md:w-auto pb-1 pr-2 pl-2 items-center bg-[#f5f5f5] w-full  xl:px-56">
                <div className="flex gap-3 w-f4 w-full">
                    <Navbar
                        fluid
                        rounded
                        className="bg-[#f5f5f5] w-full"
                    >
                        <div className="flex md:order-2">
                            <Navbar.Toggle/>
                        </div>
                        <Navbar.Collapse className="w-full">
                            <div
                                className="mt-4 flex flex-col justify-stretch items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium text-[#1865F2]">
                                <Link to={PAGES.home.url}
                                      className={menuItemClass}><img src={Logo} className="w-[24px] h-[24px] object-cover"/></Link>
                                <DropDown label={PAGES.get_to_know.label}>
                                    <div className="p-2 flex flex-col gap-2 text-[#1865F2]">
                                        <DropDown label={PAGES.about.label} toLeft={true} inline
                                                  placement="left-start">
                                            <div className="p-2 flex flex-col gap-2">
                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.vision.url}>{PAGES.vision.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.history.url}>{PAGES.history.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.chart.url}>{PAGES.chart.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.mission.url}>{PAGES.mission.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.statute.url}>{PAGES.statute.label}</Link>
                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.values.url}>{PAGES.values.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.licenses.url}>{PAGES.licenses.label}</Link>

                                            </div>
                                        </DropDown>
                                        <DropDown label={PAGES.components.label} toLeft={true}>
                                            <div className="p-2 flex flex-col gap-2">

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.previousـboardـmembers.url}>{PAGES.previousـboardـmembers.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.currentـboardـmembers.url}>{PAGES.currentـboardـmembers.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_board_of_trustees.url}>{PAGES.members_of_the_board_of_trustees.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_founding_board.url}>{PAGES.members_of_the_founding_board.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.investigators.url}>{PAGES.investigators.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_general_assembly.url}>{PAGES.members_of_the_general_assembly.label}</Link>

                                            </div>
                                        </DropDown>
                                        <DropDown label={PAGES.reports.label} toLeft={true} inline
                                                  placement="left-start">
                                            <div className="p-2 flex flex-col gap-2">

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.financialStatements.url}>{PAGES.financialStatements.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.auditReport.url}>{PAGES.auditReport.label}</Link>

                                                <Link
                                                    className={menuItemClass}
                                                    to={'/' + PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.performanceReports.url}>{PAGES.performanceReports.label}</Link>
                                            </div>
                                        </DropDown>
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.get_to_know.url + '/' + PAGES.employees.url}>{PAGES.employees.label}</Link>
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.get_to_know.url + '/' + PAGES.frequently_asked_questions.url}>{PAGES.frequently_asked_questions.label}</Link>
                                    </div>
                                </DropDown>
                                <DropDown label={PAGES.helpTopic.label}>
                                    <div className="p-2 flex flex-col gap-">
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpTopic.url + '/' + PAGES.all.url}>{PAGES.all.label}</Link>
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpTopic.url + '/' + PAGES.supporting_students.url}>{PAGES.supporting_students.label}</Link>

                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpTopic.url + '/' + PAGES.sports.url}>{PAGES.sports.label}</Link>

                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpTopic.url + '/' + PAGES.cultural.url}>{PAGES.cultural.label}</Link>
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpTopic.url + '/' + PAGES.research.url}>{PAGES.research.label}</Link>
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpTopic.url + '/' + PAGES.educational.url}>{PAGES.educational.label}</Link>
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpTopic.url + '/' + PAGES.construction.url}>{PAGES.construction.label}</Link>
                                    </div>
                                </DropDown>
                                <DropDown label={PAGES.helpMethod.label}>
                                    <div className="p-2 flex flex-col gap-">
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpMethod.url + '/' + PAGES.cash.url}>{PAGES.cash.label}</Link>
                                        <Link
                                            className={menuItemClass}
                                            to={'/' + PAGES.helpMethod.url + '/' + PAGES.non_cash.url}>{PAGES.non_cash.label}</Link>
                                    </div>
                                </DropDown>
                                <Link
                                    className={menuItemClass}
                                    to={'/' + PAGES.news.url}>{PAGES.news.label}</Link>
                                <Link
                                    className={menuItemClass}
                                    to={'/' + PAGES.supporter.url}>{PAGES.supporter.label}</Link>
                                <Link
                                    className={menuItemClass}
                                    to={'/' + PAGES.projects.url}>{PAGES.projects.label}</Link>
                                <div className="block md:hidden mt-2">
                                    <HemayatBtn/>
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="hidden md:block">
                    <HemayatBtn />
                </div>
        </div>
    );
};

export default Header;
