import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Skateboard from './../images/skateboard.svg';
const useStyles = makeStyles(theme => ({
    root: {
        // margin: 'auto',
        // width: 800 
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
       

    },
    container: {

    },
    hello: {
        height: 500,
        display: 'flex',
        alignItems: 'center'
    },
    content: {

    },
    cta: {

    },
    webDeveloper: {
        borderBottom: `solid 1px ${theme.palette.primary.dark}`,
    },
    button: {
        marginRight: theme.spacing(2),
        borderRadius: 25,
    },
    image: {
        overflowX: 'hidden',
        position: 'absolute',
        left: '30%',
        //top: 'calc(100% - 700px)'
        top: 80,
    }
}));

const Home = ({ }) => {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.container}>
            <div className={classes.hello}>
                <div className={classes.content}>
                    <Typography variant='h4' style={{ top: 100 }}>Hi</Typography>
                    <Typography variant='h6' >I'm Michael</Typography>
                    <Typography className={classes.webDeveloper} variant='subtitle1'><Typography>Web</Typography>  Developer</Typography>
                </div>
            </div>
            <div className={classes.image}>
                <img src={Skateboard} height='auto' width='140%' />
            </div>
        </div>
        <div className={classes.cta}>
            <Button className={classes.button} variant="contained" color="primary">Contact Me</Button>
            <Button className={classes.button} variant="outlined" color="primary">Download CV</Button>
        </div>
    </div>
};

export default Home;