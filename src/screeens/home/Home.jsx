import React from 'react';
//import './Home.css';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Contenedor from '../../components/container/Container.jsx';
import NavBar from '../../components/appBar/AppBar.jsx';
import Trends from '../../components/trends/Trends.jsx';

const estilos = makeStyles((theme) => ({
    fondo: {
        background: '#0a3761',

    },
    header: {
        background: 'transparent',

    },
    navbar: {
        background: '#375f86',

    },
    products: {
        background: 'white',
        width: '100%',
        paddingLeft: '2%',
        paddingRight: '2%',
        justifySelf: "center",
        alignSelf: "center",
    },
}));

const Home = (props) => {
    const classes = estilos();
    const [state, setState] = React.useState({
        products: null,

    });

    return (
        <div>
            <Grid container className={classes.fondo}>

                <Grid item xs={12} md={12} lg={3} justify="center">
                    <Box
                        bgcolor="classes.fondo"
                        color="primary.contrastText"
                        minHeight="100vh"
                        textAlign="center"
                    >
                        <Grid item xs={12} md={12} lg={3} direction="column" justify="center">
                            <Box
                                bgcolor="classes.fondo"
                                color="primary.contrastText"
                                minHeight="100px"
                                maxHeight="100px"
                                textAlign="center"
                            >
                                Alican

                            </Box>
                            <NavBar>

                            </NavBar>
                            <Trends></Trends>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} className={classes.products} direction="column" justify="center" align="center">
                            <Box
                                bgcolor="classes.fondo"
                                color="black"
                                minHeight="75vh"
                                height="75vh"

                                textAlign="left"

                            >
                                Puede que también te interese eso
                                <hr></hr>
                                <Box
                                    bgcolor="classes.fondo"
                                    color="black"
                                    minHeight="35vh"
                                    height="35vh"
                                    textAlign="left"

                                ></Box>

                                Productos populares
                                <hr></hr>
                                <Box
                                    bgcolor="classes.fondo"
                                    color="black"
                                    minHeight="35vh"
                                    height="35vh"

                                    textAlign="left"

                                ></Box>
                            </Box>

                        </Grid>

                    </Box>

                </Grid>

            </Grid>
        </div>

    )
}

export default withWidth()(Home);
