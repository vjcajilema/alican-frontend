import React from 'react';
import Box from '@material-ui/core/Box';

import {
    makeStyles, Hidden, Grid
} from '@material-ui/core';


const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    grow: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Trends = () => {

    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return (

            <div className={classes.grow}>
            <Box color="primary" >
                Tendencias  

            </Box>
            </div>

    )
}

export default Trends;
