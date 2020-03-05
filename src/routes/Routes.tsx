import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; 
import Container from '@material-ui/core/Container';
import { Home, Projects } from '../components'

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/projects",
        main: () => <Projects />
    },
    {
        path: "/resume",
        main: () => <h2>Resume</h2>
    },
    {
        path: "/about",
        main: () => <h2>About</h2>
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