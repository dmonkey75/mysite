
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ExperienceList } from './types'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        }, 
        role: {
            color: theme.palette.grey[500],
        },
        address: {
            color: theme.palette.grey[500],
            fontSize: 13,
            paddingBottom: theme.spacing(2),
        },
        description: {
            paddingBottom: theme.spacing(2),
        },

    }),
);

const Experience: React.FC = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stepper orientation="vertical">
                {ExperienceList.map((item, index) => (
                    <Step key={item.period} active={true} >
                        <StepLabel>{item.period}</StepLabel>
                        <StepContent>
                            <Typography variant='body2'>{item.company}</Typography>
                            <Typography className={classes.role} variant='body2'>{item.role}</Typography>
                            <Typography className={classes.address} variant='subtitle1'>{item.address}</Typography>
                            <Typography className={classes.description} variant='body2' paragraph={true}  align='justify'>{item.description}</Typography>

                            {item.items.map((x) => {
                                return <Typography variant='body2' paragraph={true} align='justify' >
                                    <li style={{ listStyle: 'disc' }}>
                                        {x}
                                    </li>
                                </Typography>
                            })}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default Experience