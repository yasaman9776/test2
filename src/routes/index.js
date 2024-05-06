import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import AllButtons from "../pages/AllButtons";
import AllInputs from "../pages/AllInputs";
import AllTypographys from "../pages/AllTypographys";
import AllDropDown from "../pages/AllDropDown";
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
<<<<<<< HEAD
                path:"/allTypographys",
                element: <AllTypographys/>,
=======
                path:"/allDropDown",
                element: <AllDropDown/>,
>>>>>>> dfd65b664813506b585b7e561b36bb744c71c844
            }
            
        ],
    },
])