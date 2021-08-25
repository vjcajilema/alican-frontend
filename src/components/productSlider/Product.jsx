import React from 'react';
import { Grid, makeStyles, Box, Button, withWidth, Link } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
//import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: "transparent",
    border: 'solid 1px gray',
    minHeight: '50vh',
    maxHeight: '50vh',
    padding: '3% 3% 3% 3%',
    borderRadius: '0.7em',

  },
  image: {
    height: '100%',
    maxHeight: '100%',
    /*width:'0.5%',
    maxWidth:'0.5%'*/

  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '45%',
    maxHeight: '31%',
    /*width:'0.5%',
    maxWidth:'0.5%',*/

  },
  price: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '10%',
    maxHeight: '10%',
    color: '#ff771d',
    backgroundColor:'transparent',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  name: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'center',
    height: '18%',
    maxHeight: '18%',
    fontSize: '1em',
    lineHeight:'1.1em',
    fontWeight: 'bold',
  },
  description: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'center',
    height: '18%',
    maxHeight: '18%',
    fontSize: '0.8em',
    lineHeight:'1em',
  },
}));

export default function Product(props) {
  const classes = useStyles();

  return (

    <Grid container >
      <Grid className={classes.container} item xs={4} sm={12} md={11} >
        <Grid item xs={12} sm={12} md={12} className={classes.imageContainer}>
          <img src={props.image} alt={props.name} className={classes.image} />
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <FavoriteBorderIcon />
              </Badge>
          </IconButton>
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
