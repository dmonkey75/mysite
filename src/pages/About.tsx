import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import bg01 from './../images/bg_about01.jpg';

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
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
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
    about: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paragraph: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '80%',
        margin: 'auto',
        lineHeight: 1.6,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
}));

const About = ({ }) => {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.hero} />
        <div className={classes.infoHead}>
            <Typography variant="h2" className={classes.title}>About me</Typography>
        </div>
        <div className={classes.about}>
            <Typography paragraph={true} align='justify' variant="body2" className={classes.paragraph}>
                I am experienced developer that basically loves the art of programming. I started my carrer developing windows based applications and web API’s. Couple of years ago I found interest on UI/UX development. I find It amazing how front-end developers build responsive websites and guide users what to do once they right on the page.
            </Typography>

            <Typography paragraph={true} align='justify' variant="body2" className={classes.paragraph}>
                Aside from being a developer, I am a casual runner. I spend most of my weekends in city streets. I also like traveling. Must be the reason why I am on journey to be a software architech, of course to earn more money and hit more miles. : )
            </Typography>

            <Typography paragraph={true} align='justify' variant="body2" className={classes.paragraph}>
                So...<br />
                if you are looking for a skilled developer that makes the job done, believe me, you have found one. Message me and I will be more happy to discuss business with you.
            </Typography>

            <Typography paragraph={true} align='justify' variant="body2" className={classes.paragraph}>
                Cheers!!!
            </Typography>

        </div>
    </div>
}

export default About;