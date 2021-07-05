import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
    makeStyles, Hidden, Grid
} from '@material-ui/core';


const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Home = () => {

    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="100%">
                <Typography component="div" style={{ backgroundColor: 'white', height: '100vh', maxHeight: '100vh' }} />                
            </Container>
        </React.Fragment>

    )
}

export default Home;
