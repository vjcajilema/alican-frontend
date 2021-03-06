import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
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
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ProductApi from '../../api/ProductApi';
import { AppContext } from '../../context/AppContext';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "#375f86",

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    position: 'relative',
    //    backgroundColor:'white',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    color: 'black',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    color: 'gray',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    favorites: 0,
    anotifications: 0,
    searchinput: "",

  });
  const { setProducts } = React.useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleChange = (event) => {
    var code = event.keyCode;

    setState({ ...state, [event.target.name]: event.target.value });

  };
  const handleKeyPress = (event) => {
    var code = event.keyCode || event.which;
    console.log(code);
    if (code === 13) {
      searchProduct()
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  /*const LogOut = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };*/
  const searchProduct = () => {
    ProductApi.search(state.searchinput).then(res => {
      console.log(res)
      let productsApi = res.data;
      let products = [];
      let product = [];
      let indexR = 0;
      let detalle = "";
      let descripcion = "";
      productsApi.forEach((productApidx, index) => {
        console.log(productApidx);
        indexR = index + 1;
        detalle = "";
/*
        productApi['detalle']=productApi['descripcion'];
        productApi['descripcion']=productApi['descripcion'].replace("['", "");
        productApi['descripcion']=productApi['descripcion'].replace("']", "");
*/
        for (let i = 0; i < 130; i++) {
          //if (productApidx.descripcion[i] != "-" && productApidx.descripcion[i] != "=") {
            if(productApidx.descripcion[i]&&productApidx.descripcion[i]!==null && productApidx.descripcion[i]!==undefined){
              detalle = detalle + productApidx.descripcion[i];
            }
            
          //}


        }
        productApidx['detalle'] = detalle;
        product.push(productApidx);
        if (indexR % 5 === 0 || productsApi.length === indexR) {
          products.push(product);
          product = [];
        }

      });

      console.log(productsApi.length)
      console.log(products)
      setProducts(products);

    }).catch(err => {
      console.log(err)

    })

  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem >
        {window.localStorage.getItem('userToken') ? (
          <Link href="/login" variant="body2">
            Nombre De Usuario
          </Link>
        ) : (
          <Link href="/login" variant="body2">
            Iniciar Sesi??n
          </Link>
        )}

      </MenuItem>
      <MenuItem >
        {window.localStorage.getItem('userToken') ? (
          <div  >
            Cerrar Sesi??n
          </div>
        ) : (
          <Link href="/logup" variant="body2">
            Registrar Usuario
          </Link>
        )}

      </MenuItem>
    </Menu>
  );
  const renderFavorites = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem >
        {window.localStorage.getItem('userToken') ? (
          <Link href="/login" variant="body2">
            Nombre De Usuario
          </Link>
        ) : (
          <Link href="/login" variant="body2">
            Iniciar Sesi??n
          </Link>
        )}

      </MenuItem>
      <MenuItem >
        {window.localStorage.getItem('userToken') ? (
          <div  >
            Cerrar Sesi??n
          </div>
        ) : (
          <Link href="/logup" variant="body2">
            Registrar Usuario
          </Link>
        )}

      </MenuItem>
    </Menu>
  );
  const renderLogin = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem >

        <Link href="/login" variant="body2">
          Iniciar Sesi??n
        </Link>

      </MenuItem>

    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            ALICAN
          </Typography>
          <div className={classes.search}>

            <InputBase
              placeholder="Buscar???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={state.searchinput}
              name="searchinput"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon onClick={searchProduct}></SearchIcon>
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={state.favorites} color="secondary">
                <FavoriteIcon />
              </Badge>
              {renderLogin}
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={state.anotifications} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

    </div>
  );
}
