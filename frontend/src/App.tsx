import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
    News,
    Root,
    NotFound,
    Bylaws,
    Missions,
    Visions,
    Introductions,
    Help,
    HelpUs,
    NeedHelp,
    Histories,
    OneNews,
    AuditReport,
    OneAuditReport,
    FinancialStatements,
    OneFinancialStatement,
    PerformanceReports,
    OnePerformanceReport, Profiles, Employees, OneEmployee, Participants, OneParticipant
} from "./pages";
import PAGES from "./constant/PAGES";
const router = createBrowserRouter(
    [
        {
            path: PAGES.home.url,
            element: <Root />,
        },
        {
            path: PAGES.news.url,
            element: <News />,
        },
        {
            path: PAGES.news.url + '/' + PAGES.oneNews.url,
            element: <OneNews />,
        },
        {
            path: PAGES.introductions.url,
            element: <Introductions />,
        },
        {
            path: PAGES.introductions.url + "/" + PAGES.bylaws.url,
            element: <Bylaws />,
        },
        {
            path: PAGES.introductions.url + "/" + PAGES.missions.url,
            element: <Missions />,
        },
        {
            path: PAGES.introductions.url + "/" + PAGES.visions.url,
            element: <Visions />,
        },
        {
            path: PAGES.help.url,
            element: <Help />,
        },
        {
            path: PAGES.help.url + '/' + PAGES.helpUs.url,
            element: <HelpUs />,
        },
        {
            path: PAGES.help.url + '/' + PAGES.needHelp.url,
            element: <NeedHelp />,
        },
        {
            path: PAGES.histories.url,
            element: <Histories />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.auditReport.url,
            element: <AuditReport />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.auditReport.url + "/" + PAGES.oneAuditReport.url,
            element: <OneAuditReport />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.financialStatements.url,
            element: <FinancialStatements />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.financialStatements.url + "/" + PAGES.oneFinancialStatement.url,
            element: <OneFinancialStatement />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.performanceReports.url,
            element: <PerformanceReports />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.performanceReports.url + "/" + PAGES.onePerformanceReport.url,
            element: <OnePerformanceReport />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.financialStatements.url,
            element: <FinancialStatements />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.financialStatements.url + "/" + PAGES.oneFinancialStatement.url,
            element: <OneFinancialStatement />,
        },
        {
            path: PAGES.profiles.url,
            element: <Profiles />,
        },
        {
            path: PAGES.profiles.url + '/' + PAGES.employees.url,
            element: <Employees />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.employees.url + "/" + PAGES.oneEmployee.url,
            element: <OneEmployee />,
        },
        {
            path: PAGES.profiles.url + '/' + PAGES.participants.url,
            element: <Participants />,
        },
        {
            path: PAGES.histories.url + '/' + PAGES.participants.url + "/" + PAGES.oneParticipant.url,
            element: <OneParticipant />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]
);

const App: React.FC = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
}
export default App