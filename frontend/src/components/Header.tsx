import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PAGES from "../constant/PAGES";
import {Box, Button, Menu, MenuItem} from "@mui/material";
import COLOR from "../constant/COLOR";
import PrimaryBtn from "./PrimaryBtn";
import {Dropdown, Navbar} from "flowbite-react";
import SecondaryBtn from "./SecondaryBtn";

const Header: React.FC = () => {

    return (
        <Box sx={{display: 'flex', flexDirection: "column"}}>
            <Box sx={{
                backgroundColor: COLOR.primary, padding: "1rem 2rem", color: COLOR.white,
                display: 'flex', justifyContent: "space-between"
            }}>
                <span>ورود / ثبت نام</span>
                <span>Logo</span>
            </Box>
            <Box sx={{display: 'flex', justifyContent: "space-between", margin: "1rem 2rem"}}>
                <Box sx={{display: 'flex', gap: 3}}>
                    <Navbar
                        fluid
                        rounded
                    >
                        <div className="flex md:order-2">
                            <Navbar.Toggle/>
                        </div>
                        <Navbar.Collapse>
                            <Link to={PAGES.home.url}>{PAGES.home.label}</Link>
                            <Dropdown label={PAGES.get_to_know.label} dismissOnClick={true} inline>
                                <div className="p-2 flex flex-col gap-2">
                                    <Dropdown label={PAGES.about.label} dismissOnClick={true} inline
                                              placement="left-start">
                                        <div className="p-2 flex flex-col gap-2">
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.vision.url}>{PAGES.vision.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.history.url}>{PAGES.history.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.chart.url}>{PAGES.chart.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.mission.url}>{PAGES.mission.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.statute.url}>{PAGES.statute.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.introduction.url}>{PAGES.introduction.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.values.url}>{PAGES.values.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.licenses.url}>{PAGES.licenses.label}</Link>
                                            </li>
                                        </div>
                                    </Dropdown>
                                    <Dropdown label={PAGES.components.label} inline placement="left-start">
                                        <ul className="p-2 flex flex-col gap-2">
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.previousـboardـmembers.url}>{PAGES.previousـboardـmembers.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.currentـboardـmembers.url}>{PAGES.currentـboardـmembers.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_board_of_trustees.url}>{PAGES.members_of_the_board_of_trustees.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_founding_board.url}>{PAGES.members_of_the_founding_board.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.investigators.url}>{PAGES.investigators.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_general_assembly.url}>{PAGES.members_of_the_general_assembly.label}</Link>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                    <Dropdown label={PAGES.reports.label} dismissOnClick={true} inline
                                              placement="left-start">
                                        <ul className="p-2 flex flex-col gap-2">
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.financialStatements.url}>{PAGES.financialStatements.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.auditReport.url}>{PAGES.auditReport.label}</Link>
                                            </li>
                                            <li><Link
                                                to={'/' + PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.performanceReports.url}>{PAGES.performanceReports.label}</Link>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                    <Link
                                        to={'/' + PAGES.get_to_know.url + '/' + PAGES.employees.url}>{PAGES.employees.label}</Link>
                                    <Link
                                        to={'/' + PAGES.get_to_know.url + '/' + PAGES.frequently_asked_questions.url}>{PAGES.frequently_asked_questions.label}</Link>
                                </div>
                            </Dropdown>
                            <Dropdown inline label={PAGES.helpTopic.label}>
                                <div className="p-2 flex flex-col gap-2">
                                    <li><Link
                                        to={'/' + PAGES.helpTopic.url + '/' + PAGES.supporting_students.url}>{PAGES.supporting_students.label}</Link>
                                    </li>
                                    <li><Link
                                        to={'/' + PAGES.helpTopic.url + '/' + PAGES.sports.url}>{PAGES.sports.label}</Link>
                                    </li>
                                    <li><Link
                                        to={'/' + PAGES.helpTopic.url + '/' + PAGES.cultural.url}>{PAGES.cultural.label}</Link>
                                    </li>
                                    <li><Link
                                        to={'/' + PAGES.helpTopic.url + '/' + PAGES.research.url}>{PAGES.research.label}</Link>
                                    </li>
                                    <li><Link
                                        to={'/' + PAGES.helpTopic.url + '/' + PAGES.educational.url}>{PAGES.educational.label}</Link>
                                    </li>
                                    <li><Link
                                        to={'/' + PAGES.helpTopic.url + '/' + PAGES.construction.url}>{PAGES.construction.label}</Link>
                                    </li>
                                </div>
                            </Dropdown>
                            <Link to={'/' + PAGES.helpMethod.url}>{PAGES.helpMethod.label}</Link>
                            <Link to={'/' + PAGES.news.url}>{PAGES.news.label}</Link>
                            <Link to={'/' + PAGES.participants.url}>{PAGES.participants.label}</Link>
                            <Link to={'/' + PAGES.projects.url}>{PAGES.projects.label}</Link>
                        </Navbar.Collapse>
                    </Navbar>
                </Box>
                <SecondaryBtn>حمایت</SecondaryBtn>
            </Box>
            <Box>


            </Box>
        </Box>
    );
};

export default Header;
