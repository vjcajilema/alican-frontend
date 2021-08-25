import React from 'react';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";

import Product from './Product'
//valores para pruebas
import ImgApple12 from '../../images/develop/apple12idealo.png'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'flex_start',
        alignItems:'center',
        backgroundColor: "transparent",
        marginBottom:"2%",
    },
    product: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'20%',
        backgroundColor: "transparent",
        marginBottom:"2%",
    },

}));

export default function ProductContainer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        activeIndex: 0,
        animating: false,

    });

    return (

        <Grid container >
            <Grid className={classes.container} item xs={12} sm={12} md={12} >
                {props.products.map((product, index) => (
                    <Grid className={classes.product} item xs={3} sm={12} md={3} >
                   
                        
                        <Product key={index} image={product.imagen} price={product.precio} name={product.titulo} description={product.detalle}>
                        </Product>
                   
    
                </Grid>
                    
                ))}

            </Grid>
        </Grid>

    );
}
