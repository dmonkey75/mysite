import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Projects } from '../components'; 
import bg01 from '../images/bg_projects01.jpg';

const useStyles = makeStyles(theme => ({
    root: {
    },
    hero: {
        backgroundImage: `url(${bg01})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0.2,
        height: 520,
        zIndex: -1,
    },
    infoHead: {
        display: 'flex',
        justifyContent: 'center',
        padding: `${theme.spacing(8)}px 0px`,
    },
    title: {
        color: theme.palette.primary.main,
        paddingBottom: theme.spacing(3),
        position: 'relative',
        "&:before": {
            content: '""',
            position: 'absolute',
            width: '50%',
            bottom: 0,
            margin: 'auto',
            left: '25%',
            borderBottom: `1px solid ${theme.palette.primary.dark}`,
        }
    },
}));

const Project = ({ }) => {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.hero} />
        <div className={classes.infoHead}>
            <Typography variant="h2" className={classes.title}>Projects</Typography>
        </div>

        <Projects />
    </div>
}

export default Project; 