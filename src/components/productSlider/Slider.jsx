import React from 'react';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";

const estilos = makeStyles((theme) => ({
    
    header: {
        background: 'transparent',

    },
    navbar: {
        background: '#375f86',

    },
}));

const Slider = (props) => {
    const classes = estilos();
    const [state, setState] = React.useState({
        products: null,

    });

    return (
        <div>

            <Grid container className={classes.fondo}>

                <Grid item xs={12} md={12} lg={12} >
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
                                

                            </Box>

                        </Grid>

                    </Box>

                </Grid>

            </Grid>
        </div>

    )
}

export default withWidth()(Slider);
