import React from 'react';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";
import Product from './Product'
//valores para pruebas
import ImgApple12 from '../../images/develop/apple12idealo.png'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "transparent",
        marginBottom:"2%",
    },

}));

export default function ProductContainer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        products: [1, 2, 3, 4, 5],
        activeIndex: 0,
        animating: false,

    });

    return (

        <Grid container >
            <Grid className={classes.container} item xs={12} sm={12} md={12} >
                {state.products.map((product, index) => (
                    <Product key={index} image={ImgApple12} price={800.00} name={"Apple 12"} description={"celular de marca apple"}>

                    </Product>
                ))}

            </Grid>
        </Grid>

    );
}
