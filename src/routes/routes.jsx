import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUp from "../pages/SignUp/SignUp";
import Courses from "../pages/Courses/Courses";
import DashboardLayout from "../layout/DashboardLayout";
import InstructorPage from "../components/InstructorPage/InstructorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/courses",
                element: <Courses/>
            },
            {
                path: "/instructor",
                element: <InstructorPage />
            },
        ]
    },

    {
        path: "dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                
            }
        ]
    }
]);

export default router;