import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import LoginForm from "../pages/LoginForm";
import SignUpForm from "../pages/SignUpForm";

const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: 'login',
                    element: <LoginForm />
                },
                {
                    path: 'sign-up',
                    element: <SignUpForm />
                }
            ]
        }
    ],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }

)

export default routes;