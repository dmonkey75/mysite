
import React from 'react';
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { ISkills } from './types';

const BorderLinearProgress = withStyles(theme => ({
    root: {
        borderRadius: 25,
        height: 6,
        backgroundColor: theme.palette.grey[700],
    },
    bar: {
        borderRadius: 25,
        backgroundColor: theme.palette.primary.main,
    },
}))(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        //paddingTop: theme.spacing(2),
        //paddingBottom: theme.spacing(2),
    }, 
    skill: { 
        padding: `${theme.spacing(0.8)}px 0px`,
    },
    skillName: {
        //fontSize: 11
    },
    rating: {
        width: '50%',
    },
}));
 
const Skills: React.FC<ISkills> = (props) => {
    const classes = useStyles();

    return <div className={classes.root}>
        {props.items.map((item, index) => {
            return <Grid
                className={classes.skill}
                container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Typography variant="body2" className={classes.skillName}>
                    {item.name}
                </Typography>

                <div className={classes.rating}>
                    <Grid xs item >
                        <BorderLinearProgress
                            variant="determinate"
                            color="secondary"
                            value={item.rating}
                        />
                    </Grid>
                </div>

            </Grid>
        })}
    </div>
}

export default Skills