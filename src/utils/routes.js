import {ERROR_ROUTE, HOME_ROUTE, POKEMON_INFO_ROUTE} from "./consts";
import Home from "../pages/Home";
import Info from "../pages/Info";
import ErrorPage from "../pages/ErrorPage";


export const  routes = [
    {
        path:HOME_ROUTE,
        Component: Home
    },
    {
        path:POKEMON_INFO_ROUTE + '/:name',
        Component: Info
    },

    {
        path:ERROR_ROUTE,
        Component: ErrorPage
    }
]

