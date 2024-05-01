import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import AllButtons from "../pages/AllButtons";
import AllInputs from "../pages/AllInputs";
export const router =createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        errorElement: (
            <h3 className="text-center">Nothing !</h3>
        ),
        children: [
            {
                path: "/",
                element:  <App />,
            },
            {
                path: "/allBtn",
                element:  <AllButtons />,
            },
            {
                path:"/allInputs",
                element: <AllInputs/>,
            }
            
        ],
    },
])