import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import { AllBadges,AllButtons,AllDifferentInputType,AllDropDown,AllInputs,AllProgressBars,AllTypographys,AllUploadType,AllToasts } from "../pages";
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
            },
            {
                path:"/allTypographys",
                element: <AllTypographys/>,
            },
            {
                path:"/allDropDown",
                element: <AllDropDown/>,

            },
            {
                path:"/allDifferentInputType",
                element: <AllDifferentInputType/>,

            },
            {
                path:"/allProgressBars",
                element: <AllProgressBars/>,

            },
            {
                path:"/allUploadType",
                element: <AllUploadType/>,

            },
            {
                path:"/allBadges",
                element: <AllBadges/>,

            },
            // {
            //     path:"/allDatePickers",
            //     element: <AllDatePickers/>,

            // },
            
            {
                path:"/allToasts",
                element: <AllToasts/>,

            },
        ],
    },
])