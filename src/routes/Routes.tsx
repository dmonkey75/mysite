import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; 
import Container from '@material-ui/core/Container'; 
import { Home, Project, Resume, About } from './../pages';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/projects",
        main: () => <Project />
    },
    {
        path: "/resume",
        main: () => <Resume />
    },
    {
        path: "/about",
        main: () => <About />
    }
];
 
const Routes = (props: any) => (
    <Container>
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                />
            ))}
        </Switch>
    </Container>
);

export default Routes;