import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Explore from "../pages/explore";
import BusinessDetail from "../pages/business-detail";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
            { path: "explore", element: <Explore /> },
            { path: "business/:id", element: <BusinessDetail /> },
            { path: "dashboard", element: <Dashboard /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;