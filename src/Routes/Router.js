import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact/Contact"
import Home from "../Pages/Home/Home";
import Root from "../Root";

const router = createBrowserRouter([
    {    
        path: "/",
        element: <Root />,
        children : [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])

export default router