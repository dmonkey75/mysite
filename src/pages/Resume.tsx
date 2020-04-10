import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Skills, Experience } from '../components';
import { SkillsFrameworkAndLibraries, SkillsAzure, SkillsTools } from './types';  
import bg01 from '../images/bg_resume01.jpg';

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
    resume: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
        padding: `${theme.spacing(4)}px 10%`,
    },
    section: {
        margin: `${theme.spacing(2)}px 0px`,
    },
    sectionHeader: {
        color: theme.palette.primary.main,
        padding: `${theme.spacing(1.5)}px 0px`,
    },
    paragraph: {
        display: 'flex',
        alignItems: 'flex-start',
        lineHeight: 1.6,
    },
    skillSubTitle: {
        color: theme.palette.grey[500],
        paddingTop: theme.spacing(2),
    },
    skillSubTitleNoPadding: {
        color: theme.palette.grey[500],
    },
    labelValue: {
        padding: `${theme.spacing(0.8)}px 0px`,
    },
    label: {
        color: theme.palette.grey[500],
    },
    sharedAccessSection: {
        color: theme.palette.primary.dark,
    },
    certificationSharedAccess: {
        display: 'flex',

        '& :first-child': {
            width: 160
        }
    },

    address: {
        color: theme.palette.grey[500],
        fontSize: 13,
        paddingBottom: theme.spacing(2),
    },
}));

const Resume = ({ }) => {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.hero} />
        <div className={classes.infoHead}>
            <Typography variant="h2" className={classes.title}>Resumé</Typography>
        </div>

        <div className={classes.resume}>
            <div className={classes.section}>
                <Typography className={classes.sectionHeader} variant="h5">
                    Professional Summary
                </Typography>

                <Typography paragraph={true} align='justify' variant="body2" className={classes.paragraph}>
                    Microsoft Certified Professional with 11 years of solid experience in .Net with two Microsoft certifications (MCTS). Has strong knowledge in object-oriented programming. Skilled in building API and Web Based applications. Primary programming language is C#. Proficient in MS SQL and experienced working with Azure and On-Premise environment.
                </Typography>
            </div>

            <div className={classes.section}>
                <Typography className={classes.sectionHeader} variant="h5">
                    Skills
                </Typography>
                <Typography variant="subtitle1" className={classes.skillSubTitleNoPadding}>
                    Framework & Libraries
                </Typography>
                <Skills items={SkillsFrameworkAndLibraries} />

                <Typography variant="subtitle1" className={classes.skillSubTitle}>
                    Azure
                </Typography>
                <Skills items={SkillsAzure} />

                <Typography variant="subtitle1" className={classes.skillSubTitle}>
                    Tools
                </Typography>
                <Skills items={SkillsTools} />
            </div>

            <div className={classes.section}>
                <Typography className={classes.sectionHeader} variant="h5">
                    Certifications
                </Typography>

                <div className={classes.labelValue}>
                    <Typography className={classes.label} variant="body2">
                        2011.09.27
                    </Typography>

                    <Typography variant="body2">
                        TS: Accessing Data with Microsoft .Net Framework 4
                    </Typography>
                </div>

                <div className={classes.labelValue}>
                    <Typography className={classes.label} variant="body2">
                        2011.08.12
                    </Typography>

                    <Typography variant="body2">
                        TS: Windows Applications Development with Microsoft .NET Framework 4
                    </Typography>
                </div>

                <div className={classes.labelValue}>
                    <Typography className={`${classes.label} ${classes.sharedAccessSection}`} variant="body2">
                        Certification Shared Access
                    </Typography>

                    <div className={classes.certificationSharedAccess}>
                        <Typography className={classes.label} variant="body2">
                            Transcript ID:
                        </Typography>
                        <Typography variant="body2">
                            1230422
                        </Typography>
                    </div>

                    <div className={classes.certificationSharedAccess}>
                        <Typography className={classes.label} variant="body2">
                            Access Code:
                        </Typography>
                        <Typography variant="body2">
                            09201247388
                        </Typography>
                    </div>

                    <div className={classes.certificationSharedAccess}>
                        <Typography className={classes.label} variant="body2">
                            Transcript Viewing Page:
                        </Typography>

                        <Typography variant="body2" align='justify' noWrap={false}>
                            <a href="https://mcp.microsoft.com/Anonymous/Transcript/Validate">Transcript Link</a>
                        </Typography>
                    </div>
                </div>
            </div>

            <div className={classes.section}>
                <Typography className={classes.sectionHeader} variant="h5">
                    Experience
                </Typography>

                <Experience />
            </div>

            <div className={classes.section}>
                <Typography className={classes.sectionHeader} variant="h5">
                    Education
                </Typography>
                <Typography variant="h6">
                    Bachelor of Science in Computer Science
                </Typography>
                <Typography variant="body2">
                    2004-2007
                </Typography>
                <Typography variant="body2">
                    Notre Dame Of Marbel University
                </Typography> 
                <Typography variant="body2" className={classes.address}>
                    Alunan Ave, Koronadal City, South Cotabato, Philippines 9506
                </Typography> 
            </div>
        </div>
    </div>
}

export default Resume;