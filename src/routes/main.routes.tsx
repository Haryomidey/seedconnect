import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Explore from "../pages/explore";
import BusinessDetail from "../pages/business-detail";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/reset-password";

import BusinessSetup from "../pages/business-setup";
import InvestorSetup from "../pages/investor-setup";

import BusinessDashboard from "../pages/business-dashboard";
import BusinessProfile from "../pages/business-profile";
import BusinessMessages from "../pages/business-message";

import InvestorDashboard from "../pages/investor-dashboard";
import InvestorExplore from "../pages/investor-explore";
import SavedBusinesses from "../pages/investor-saved-business";
import InvestorProfile from "../pages/investor-profile";
import InvestorMessages from "../pages/investor-messages";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "explore", element: <Explore /> },
            { path: "business/:id", element: <BusinessDetail /> },
        ],
    },
    
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
            { path: "forgot-password", element: <ForgotPassword /> },
            { path: "reset-password", element: <ResetPassword /> },
            
        ]
    },

    {
        path: "/onboarding",
        children: [
            { path: "business", element: <BusinessSetup /> },
            { path: "investor", element: <InvestorSetup /> },
        ],
    },

    {
        path: "/business",
        element: <DashboardLayout />,
        children: [
            { path: "dashboard", element: <BusinessDashboard /> },
            { path: "messages", element: <BusinessMessages /> },
            { path: "profile", element: <BusinessProfile /> },
        ],
    },

    {
        path: "/investor",
        element: <DashboardLayout />,
        children: [
            { path: "dashboard", element: <InvestorDashboard /> },
            { path: "explore", element: <InvestorExplore /> },
            { path: "saved", element: <SavedBusinesses /> },
            { path: "messages", element: <InvestorMessages /> },
            { path: "profile", element: <InvestorProfile /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;