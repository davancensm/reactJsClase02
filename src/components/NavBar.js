import CartWidget from './CartWidget';
import React from 'react';
import {AppBar,Toolbar,Typography,Button,makeStyles,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));


export default function NavBar(){
    const classes = useStyles();
    return( 
    <div className={classes.root}>
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/> 
                </IconButton>
                <Button>Menu</Button>
                <Button>Productos</Button>
                <Button>Ayuda</Button>
                <Typography variant='h6' className={classes.title}>
                    E-Commerce
                </Typography>
                <Button><CartWidget/></Button>
            </Toolbar>
        </AppBar>
        </div>)
}

