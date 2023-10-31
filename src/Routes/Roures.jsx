import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home";
import QuestionForm from "../Components/QuestionForm";
import Answer from "../Components/Answer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/question",
                element: <QuestionForm />
            },
            {
                path: "/answer",
                element: <Answer />
            },
           
        ]
    },
]);