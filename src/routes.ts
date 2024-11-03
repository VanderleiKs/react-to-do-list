import {createBrowserRouter} from "react-router-dom";
import TaskDetails from "./components/TaskDetails.tsx";
import App from "./App.tsx";

export const routes = createBrowserRouter([
    {
        path: '',
        Component: App
    },
    {
        path: `/task-details/:id`,
        Component: TaskDetails

    }
])