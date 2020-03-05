import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        // margin: 'auto',
        // width: 800
    }
}));

const Main: React.FC = ({ children }) => {

    const classes = useStyles();

    return <Router>
        <div className={classes.root}> {children}</div>
    </Router>
};

export default Main;