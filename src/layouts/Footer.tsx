import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@iconify/react'; 
import githubIcon from '@iconify/icons-zmdi/github-alt';
import linkedinIcon from '@iconify/icons-fa/linkedin';
import facebookIcon from '@iconify/icons-fa/facebook';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
        //justifyContent: 'space-between',
        //backgroundColor: '#FBFBFC',
        height: theme.spacing(8),
        borderTop: `solid 1px ${theme.palette.divider}`,
        marginTop: 20,
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        display: 'flex',
        //justifyItems: 'flex-end',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    appBar: {
        //top: 'auto',
        marginTop: 20,
        //bottom: 0,
        height: '20%',
        backgroundColor: theme.palette.secondary.light,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuText: {
        textTransform: 'capitalize',
    },
    address: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
    },
    footerLeftIcon: {
        marginRight: theme.spacing(2),
    },
}));

function EmailIcon(props: SvgIconProps) {
    return (<SvgIcon {...props}>
        <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
    </SvgIcon>)
}

const Footer: React.FC = () => {

    const theme = useTheme();
    const classes = useStyles();

    return (<div className={classes.root}>
        <IconButton aria-label="facebook"
            aria-controls="footer-icon-facebook"
            aria-haspopup="true"
            color="inherit">
            <Icon icon={facebookIcon} style={{ fontSize: '16px' }} />
        </IconButton>

        <IconButton aria-label="facebook"
            aria-controls="footer-icon-facebook"
            aria-haspopup="true"
            color="inherit">
            <Icon icon={linkedinIcon} style={{ fontSize: '16px' }} />
        </IconButton>

        <IconButton aria-label="facebook"
            aria-controls="footer-icon-facebook"
            aria-haspopup="true"
            color="inherit">
            <Icon icon={githubIcon} style={{ fontSize: '16px' }} />
        </IconButton>
    </div> 
    );
};

export default Footer;