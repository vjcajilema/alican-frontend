import React from 'react';
import { Grid, makeStyles, Box, Button, withWidth, Link } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
//import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: "transparent",
    border: 'solid 1px gray',
    minHeight: '34vh',
    padding: '3% 3% 3% 3%',
    borderRadius: '0.7em',

  },
  image: {
    height: '100%',
    maxHeight: '100%',
    justifySelf: 'center',

  },
  imageContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '50%',
    maxHeight: '45%',
  },
  price: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '20%',
    maxHeight: '20%',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  name: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'center',
    height: '10%',
    maxHeight: '10%',
    fontSize: '1em',

  },
  description: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'center',
    height: '10%',
    maxHeight: '10%',
    fontSize: '1.2em',

  },
}));

export default function Product(props) {
  const classes = useStyles();

  return (

    <Grid container >
      <Grid className={classes.container} item xs={4} sm={12} md={11} >
        <Grid item xs={12} sm={12} md={12} className={classes.imageContainer}>
          <img src={props.image} alt={props.name} className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.price}>
          $ {props.price}
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.name}>
          {props.name}
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.description}>
          {props.description}
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.description}>

          <Button href="/login" background="primary">
            Ver Detalle
          </Button>

        </Grid>
      </Grid>
    </Grid>

  );
}
