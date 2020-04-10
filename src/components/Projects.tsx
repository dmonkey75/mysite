import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Icon } from '@iconify/react';
import descriptionIcon from '@iconify/icons-ic/outline-description';
import toolsIcon from '@iconify/icons-entypo/tools';
import webIcon from '@iconify/icons-ls/web';
import githubIcon from '@iconify/icons-bytesize/github';
import { ProjectList } from './types'; 
import Divider from '../images/divider.svg';

const useStyles = makeStyles(theme => ({  
    root: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
        marginBottom: theme.spacing(2),
        paddingBottom: theme.spacing(8),
    },
    description: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '80%',
        margin: 'auto',
    },
    icon: {
        minWidth: theme.spacing(8),
        fontSize: '24px'
    },
    project: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    projectImage: {
        marginBottom: theme.spacing(4),
    },
    divider: {
        margin: 'auto',
        width: '10%',
        inlineSize: .5,
        paddingTop: theme.spacing(8),
    }
}));

function Projects(props: any) {
    const theme = useTheme();
    const classes = useStyles();

    return <div className={classes.root}>
        {ProjectList.map((item, index) => {
            return <div className={classes.project}>
                <img className={classes.projectImage} src={item.image} height='auto' width='30%' />
                <div className={classes.description}>
                    <Icon className={classes.icon} icon={descriptionIcon} />
                    <Typography paragraph={true} align='justify' style={{ margin: `0 ${theme.spacing(2)}` }} variant="subtitle2">
                        {item.description}
                    </Typography>
                </div>
                <div className={classes.description}>
                    <Icon className={classes.icon} icon={toolsIcon} />
                    <Typography paragraph={true} align='justify' variant="subtitle2">
                        {item.tools}
                    </Typography>
                </div>
                <div className={classes.description}>
                    <Icon className={classes.icon} icon={webIcon} />
                    <Typography paragraph={true} align='justify' variant="subtitle2">
                        {item.url}
                    </Typography>
                </div>
                <div className={classes.description}>
                    <Icon className={classes.icon} icon={githubIcon} />
                    <Typography paragraph={true} align='justify' variant="subtitle2">
                        {item.github}
                    </Typography>
                </div>

                {ProjectList.length - 1 != index && <div className={classes.divider}>
                    <img src={Divider} />
                </div>}
            </div>
        })}

    </div>
};

export default Projects;