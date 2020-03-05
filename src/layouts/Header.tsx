import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './../images/logo.svg'; 
import Drawer from '@material-ui/core/Drawer'; 
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Description from '@material-ui/icons/Description';
import Work from '@material-ui/icons/Work';
import Face from '@material-ui/icons/Face';
import List from '@material-ui/core/List';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'; 

const menu = [{
    path: '/',
    text: 'home',
    icon: () => <HomeIcon />,
},
{
    path: '/projects',
    text: 'projects',
    icon: () => <Work />,
},
{
    path: '/resume',
    text: 'resume',
    icon: () => <Description />,
},
{
    path: '/about',
    text: 'about me',
    icon: () => <Face />,
}];

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    menuText: {
        textTransform: 'capitalize'
    }
}));


const Header: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();

    const handleClickAway = () => {
        setOpen(false);
    }

    const handleClick = () => {
        setOpen(prev => !prev);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar variant="dense" className={classes.root}>


                        <Link to='/'>
                            <IconButton
                                aria-label="logo"
                                aria-controls="menu-logo"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <img src={logo} height='auto' width='100%' />
                            </IconButton>

                        </Link>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleClick}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                        <Typography variant='caption'>
                            Michael Cajandig
                            </Typography>
                    </div>
                    <Divider />
                    <List>
                        {
                            menu.map((item) => (
                                <ListItem button={true} {...{ component: Link, to: `${item.path}` }} onClick={handleClick}>
                                    <ListItemIcon>
                                        <item.icon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.menuText} primary={item.text} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
            </div>
        </ClickAwayListener>
    );
}

export default Header;