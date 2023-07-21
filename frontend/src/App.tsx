import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

import {
    Root,
    NotFound,

    Vision,
    History,
    Chart,
    Missions,
    Statute,
    Values,
    Licenses,
    PreviousBoardMembers,
    CurrentBoardMembers,
    MembersOfTheBoardOfTrustees,
    MembersOfTheFoundingBoard,
    Investigators,
    MembersOfTheGeneralAssembly,
    FinancialStatements,
    AuditReport,
    PerformanceReports,
    Employees,
    FrequentlyAskedQuestions,

    AllSupportTopic,
    SupportingStudents,
    Sports,
    Cultural,
    Research,
    Educational,
    Construction,
    OneSupportTopic,

    Cash,
    NonCash,


    News,
    OneNews,

    Supporter,
    OneSupporter,

    Projects,
    OneProject
} from "./pages";
import PAGES from "./constant/PAGES";
import {ErrorFallback} from "./components";


const router = createBrowserRouter(
    [
        {
            path: PAGES.home.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Root/></ErrorBoundary>,
        },

        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.vision.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Vision/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.history.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><History/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.chart.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Chart/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.mission.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Missions/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.statute.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Statute/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.values.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Values/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.licenses.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Licenses/></ErrorBoundary>
        },

        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.previousـboardـmembers.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><PreviousBoardMembers/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.currentـboardـmembers.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><CurrentBoardMembers/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_board_of_trustees.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><MembersOfTheBoardOfTrustees/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_founding_board.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><MembersOfTheFoundingBoard/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.investigators.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Investigators/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_general_assembly.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><MembersOfTheGeneralAssembly/></ErrorBoundary>
        },

        {
            path: PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.financialStatements.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><FinancialStatements/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.auditReport.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><AuditReport/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' + PAGES.performanceReports.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><PerformanceReports/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.employees.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Employees/></ErrorBoundary>
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.frequently_asked_questions.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><FrequentlyAskedQuestions/></ErrorBoundary>
        },

        {
            path: PAGES.helpTopic.url + '/' + PAGES.all.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><AllSupportTopic/></ErrorBoundary>
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.supporting_students.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><SupportingStudents/></ErrorBoundary>
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.sports.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Sports/></ErrorBoundary>
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.cultural.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Cultural/></ErrorBoundary>
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.research.url,
            element:<ErrorBoundary fallback={<ErrorFallback />}><Research/></ErrorBoundary>
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.educational.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Educational/></ErrorBoundary>
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.construction.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Construction/></ErrorBoundary>
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.id.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><OneSupportTopic/></ErrorBoundary>
        },


        {
            path: PAGES.helpMethod.url + "/" + PAGES.cash.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Cash/></ErrorBoundary>,
        },
        {
            path: PAGES.helpMethod.url + "/" + PAGES.non_cash.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><NonCash/></ErrorBoundary>
        },

        {
            path: PAGES.news.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><News/></ErrorBoundary>
        },
        {
            path: PAGES.news.url + '/' + PAGES.id.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><OneNews/></ErrorBoundary>
        },

        {
            path: PAGES.supporter.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Supporter/></ErrorBoundary>
        },
        {
            path: PAGES.supporter.url + "/" + PAGES.id.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><OneSupporter/></ErrorBoundary>
        },

        {
            path: PAGES.projects.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><Projects/></ErrorBoundary>
        },
        {
            path: PAGES.projects.url + "/" + PAGES.id.url,
            element: <ErrorBoundary fallback={<ErrorFallback />}><OneProject /></ErrorBoundary>
        },

        {
            path: "*",
            element: <ErrorBoundary fallback={<ErrorFallback />}><NotFound/></ErrorBoundary>
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