import React from 'react';
//import './Home.css';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Contenedor from '../../components/container/Container.jsx';


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

    const [state, setState] = React.useState({
        products: null,

    });

    return (
        <div className="Container">
            <div className="NavBar">
                Inicio de sesion
                <div className="Search">
                    <input 
                        className="Search-Input"
                        placeHolder="Buscar producto ....">
                    
                    </input>

                </div>
            </div>
            <div className="Recomendados">
                <div className="Producos-Titulos">
                    Productos
                    
                </div>
                <div className="Produco-Items">
                    {state.products?(
                        <div>
                            No se han encontrado productos
                        </div>
                    ):(
                        <div>
                            <Button>
                                Boton
                            </Button>

                        </div>

                    )
                    
                    }
                    
                </div>

            </div>
        </div>

    )
}

export default Home;
