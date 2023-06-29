import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import {Root, NotFound,

    Vision, History, Chart, Missions, Statute, Introductions, Values, Licenses,
    PreviousBoardMembers, CurrentBoardMembers, MembersOfTheBoardOfTrustees, MembersOfTheFoundingBoard, Investigators, MembersOfTheGeneralAssembly,
    FinancialStatements, AuditReport, PerformanceReports,
    Employees, OneEmployee,
    FrequentlyAskedQuestions,

    SupportingStudents, Sports, Cultural, Research, Educational, Construction,

    HelpMethod,

    News, OneNews,

    Participants, OneParticipant,

    Projects
} from "./pages";
import PAGES from "./constant/PAGES";
const router = createBrowserRouter(
    [
        {
            path: PAGES.home.url,
            element: <Root />,
        },

        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' +  PAGES.vision.url,
            element: <Vision />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' +  PAGES.history.url,
            element: <History />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.chart.url,
            element: <Chart />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.mission.url,
            element: <Missions />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.statute.url,
            element: <Statute />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.introduction.url,
            element: <Introductions />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.values.url,
            element: <Values />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.about.url + '/' + PAGES.licenses.url,
            element: <Licenses />
        },

        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.previousـboardـmembers.url,
            element: <PreviousBoardMembers />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.currentـboardـmembers.url,
            element: <CurrentBoardMembers />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_board_of_trustees.url,
            element: <MembersOfTheBoardOfTrustees />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_founding_board.url,
            element: <MembersOfTheFoundingBoard />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.investigators.url,
            element: <Investigators />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.components.url + '/' + PAGES.members_of_the_general_assembly.url,
            element: <MembersOfTheGeneralAssembly />
        },

        {
            path: PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' +  PAGES.financialStatements.url,
            element: <FinancialStatements />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' +  PAGES.auditReport.url,
            element: <AuditReport />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.reports.url + '/' +  PAGES.performanceReports.url,
            element: <PerformanceReports />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.employees.url,
            element: <Employees />
        },
        {
            path: PAGES.get_to_know.url + '/' + PAGES.employees.url + '/' + '/' + PAGES.id.url,
            element: <OneEmployee />
        },

        {
            path: PAGES.get_to_know.url + '/' + PAGES.frequently_asked_questions.url,
            element: <FrequentlyAskedQuestions />
        },

        {
            path: PAGES.helpTopic.url + '/' + PAGES.supporting_students.url,
            element: <SupportingStudents />
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.sports.url,
            element: <Sports />
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.cultural.url,
            element: <Cultural />
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.research.url,
            element: <Research />
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.educational.url,
            element: <Educational />
        },
        {
            path: PAGES.helpTopic.url + '/' + PAGES.construction.url,
            element: <Construction />
        },

        {
            path: PAGES.helpMethod.url,
            element: <HelpMethod />,
        },

        {
            path: PAGES.news.url,
            element: <News />,
        },
        {
            path: PAGES.news.url + '/' + PAGES.id.url,
            element: <OneNews />,
        },

        {
            path: PAGES.participants.url,
            element: <Participants />,
        },
        {
            path: PAGES.participants.url + "/" + PAGES.id.url,
            element: <OneParticipant />,
        },

        {
            path: PAGES.projects.url,
            element: <Projects />,
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