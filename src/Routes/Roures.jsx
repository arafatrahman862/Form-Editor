import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home";
import QuestionForm from "../Components/QuestionForm";
import Answer from "../Components/Answer";
import Navbar from "../Components/Navbar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/question",
                element: <QuestionForm></QuestionForm>
            },
            {
                path: "/answer",
                element: <Answer></Answer>
            },
            {
                path: "/navbar",
                element: <Navbar></Navbar>
            },
           
        ]
    },
]);