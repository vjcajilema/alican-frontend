import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    height: '95%',
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '85%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    
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
  description: {
    height: '100%',
    maxHeight: '80vh',
    overflowY:'scroll',
    overflowX:'hidden',

  },
  
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <h3 id="simple-modal-title">{props.product?(props.product.name):(<></>)}</h3>
        <Grid className={classes.container} item xs={4} sm={12} md={12} >
            <Grid item xs={12} sm={12} md={12} className={classes.imageContainer}>
            <img src={props.product.image} alt={props.product.name} className={classes.image} />
            <Grid item xs={5} sm={5} md={5.5} className={classes.description}>
              {props.product.description}
            </Grid>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={0} color="secondary">
                    <FavoriteBorderIcon />
                </Badge>
            </IconButton>
            </Grid>

        </Grid>
      
    </div>
  );

  return (
    <div>
      
      <Button onClick={handleOpen} background="primary">
            Ver Detalle
          </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}