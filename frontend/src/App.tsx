import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import News from "./pages/dynanmic/News";
import NotFound from "./pages/NotFound";
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