import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import bg01 from './../images/bg_01.jpg';
import { Projects } from '../components';

const useStyles = makeStyles(theme => ({
    root: {
        flexDirection: 'column',
    },
    container: {
        height: 350,
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
    greetings: {
        marginTop: theme.spacing(10),
    },
    cta: {
        marginTop: theme.spacing(12),
    },
    name: {
        display: 'inline',
    },
    webDeveloper: {
        display: 'inline',
        paddingBottom: theme.spacing(1),
        borderBottom: `solid 2px ${theme.palette.primary.dark}`,
    },
    button: {
        marginRight: theme.spacing(2),
        borderRadius: 25,
    },
    info: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
        marginBottom: theme.spacing(2),
    },
    infoHead: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(8),
    },
    infoDetails: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: theme.spacing(8),
        margin: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
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

const Home = ({ }) => { 
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.hero} />
        <div className={classes.container}>
            <div className={classes.greetings}>
                <Typography variant='subtitle1'>Hi,</Typography>
                <Typography variant='h4' className={classes.name} >I'm Michael</Typography>
                <Typography variant='subtitle1'><Typography className={classes.webDeveloper}>Web</Typography>  Developer</Typography>
            </div>
            <div className={classes.cta}>
                <Button className={classes.button} variant="contained" color="primary">Contact Me</Button>
                <Button className={classes.button} variant="outlined"  ><Typography>Download CV</Typography></Button>
            </div>
        </div>

        <div className={classes.info}>
            <div className={classes.infoHead}>
                <Typography variant="h6" className={classes.title}>What I do</Typography>
            </div>
            <div className={classes.infoDetails}>
                <Typography paragraph={true} align='center' variant="subtitle2">I am full stack developer based in the Philippines. Specializing in Web and Restful API developement.</Typography>
            </div>
            <div className={classes.infoHead}>
                <Typography variant="h6" className={classes.title}>My Development Stack</Typography>
            </div>
            <div className={classes.infoDetails}>
                <Typography paragraph={true} align='center' variant="subtitle2">HTML5, CSS, Javascript, React, C#.Net, MongoDb, Nodejs,  MS SQL, Azure, Visual Studio Code</Typography>
            </div>
            <div className={classes.infoHead}>
                <Typography variant="h6" className={classes.title}>What I can offer</Typography>
            </div>
            <div className={classes.infoDetails}>
                <Typography paragraph={true} align='center' variant="subtitle2">I can build/design responsive and intuitive websites for any type of business. A website not simply running on your customer browser but search engine friendly.</Typography>
            </div>
        </div>

        <Projects />
    </div>
};

export default Home;