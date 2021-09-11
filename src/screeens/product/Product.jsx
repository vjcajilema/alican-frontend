import React from 'react';
//import './Home.css';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";
import NavBar from '../../components/appBar/AppBar.jsx';
import Trends from '../../components/trends/Trends.jsx';
import Logo from '../../images/Logotipo.png'
import ProductContainer from '../../components/productSlider/ProductContainer'
import ProductApi from '../../api/ProductApi'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import Link from '@material-ui/core/Link';
const estilos = makeStyles((theme) => ({
    fondo: {
        background: '#0a3761',

    },
    paper: {
        position: 'absolute',
        display: 'flex',
        /*flexDirection: 'row',*/
        width: '97%',
        backgroundColor: theme.palette.background.paper,

        boxShadow: theme.shadows[5],


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
    logo: {
        maxHeight: '80px',
    },
    
    productContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '100%',
        maxHeight: '100%',
        /*width:'0.5%',
        maxWidth:'0.5%',*/

    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '60%',
        maxHeight: '60%',
        width:'35%',
        maxWidth:'35%',

    },
    image: {
        height: '70%',
        maxHeight: '70%',
        minHeight: '50vh',
        /*width:'0.5%',
        maxWidth:'0.5%'*/

    },
    description: {
        height: '98%',
        maxHeight: '80vh',
        overflowY: 'scroll',
        overflowX: 'hidden',

    },
    timeline: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        height: '95%',
        maxHeight: '55%',
        width: '100%',
    },
    priceIdeal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'ceter',
        fontSize: '75%',


    },
}));

const Product = (props) => {
    const classes = estilos();
    const [state, setState] = React.useState({
        product: [],

    });
    const { appState, getProduct, setProduct } = React.useContext(AppContext);
    const { id } = useParams()
    console.log(id)

    React.useEffect(() => {
        if (localStorage.getItem('product')) {
            setProduct(JSON.parse(localStorage.getItem('product')))
        }
        ProductApi.find(id)
            .then(res => {
                console.log(res);
                let data = res.data[0];
                setState({ ...state, product: data });
                //{"id":432019150,"image":"https://http2.mlstatic.com/D_NQ_NP_622520-MEC42188289684_062020-O.jpg","price":"399","name":"Laptop Herobook Pro Chuwi Lenovo Windows 10 Teletrabajo ","description":"PRODUCTO 100% ORIGINAL', 'Portátil Chuwi Herobook Pro 2021', 'Caracteríticas técnicas', 'Compacto, ligero y fácil de transportar', 'El ordenador portátil CHUWI HeroBook es un ordenador compacto con unas dimensiones de 34,2 cm de alto por 20,9 cm de ancho por 1,3 cm de grosor. Además, pesa 1,46 kg.', 'Gracias a su diseño y estas medidas se hace un portátil ideal para el trabajo. Es muy fácil de llevar de un lado para otro, sin necesidad de que esta sea excesivamente grande. Además, su peso que no llega ni al kilo y medio contribuye a su fácil transporte y también lo hace la ligereza de los materiales externos, sin muchos alardes.', 'Pantalla antirreflectante y Full HD', 'La pantalla del CHUWI HeroBook Pro es de 14.10 pulgadas. Cuenta con una resolución máxima en Full HD, es decir, 1920 x 1080 píxeles IPS Ultra, al igual que su hermano mayor CHUWI Aerobook.', 'Esto contribuye a que las imágenes se muestren de manera clara y vívida, con gran precisión en los detalles, para ofrecer una experiencia visual que ordenadores de gama más alta, y mayor precio, ya dicen ofrecer.', 'Además, cuenta con una tecnología antirreflejo que junto con el modo nocturno y la posibilidad de configurar la gama de colores reducirán el posible cansancio de los ojos después de estar mirando la pantalla durante largos períodos de tiempo.', 'Chuwi herobook', 'Información acerca del procesador y el disco duro', 'El CHUWI HeroBook tiene un procesador Intel N4020 Quad-Core, además con su tecnología Turbo Boost puede alcanzar velocidades de hasta 2.80 GHz. Gracias a este procesador se puede disfrutar de un gran rendimiento y velocidad, siempre adecuadas a su precio, a la hora de ejecutar archivos, programas, cargar imágenes o ver vídeos. Es un ordenador que se caracteriza por una gran fluidez.', 'En lo referente a su disco duro, el CHUWI HeroBook tiene un disco duro con una SSD de 256 GB libres, pero, para ampliar la capacidad de almacenamiento, ofrece la posibilidad de añadir una segunda SSD con hasta 2 TB de capacidad.', 'El hecho que posibilite ampliar la memoria de la SSD y su espacio de almacenamiento es muy positivo, ya que por un precio realmente económico se puede tener un espacio y capacidad de almacenamiento increíbles, que, ni siquiera, muchos de los ordenadores de alta gama, o con precios mucho más elevados, tienen.', 'Memoria RAM y la tarjeta gráfica:', 'EL portátil CHUWI HeroBook tiene una memoria RAM de 8 GB LPDDR4. Puede abrir muchas páginas, programas y documentos para trabajar con ellos al mismo tiempo.', 'La tarjeta gráfica que utiliza es una Intel UHD 600. Lo cual permite disfrutar de unos gráficos en alta definición y tener una experiencia óptica de lo más placentera, con unos colores muy claros en cuanto a nitidez y nada saturados por el brillo.', 'Conectividad y batería del CHUWI HeroBook Pro', 'En cuanto a sus servicios respecto a conectividad, estos son bastante completos; y es que el CHUWI HeroBook Pro cuenta con una entrada para puerto HDMI, otra para Ethernet y otra entrada de micrófono.', 'Adicionalmente, puede conectarse a un proyector, lo cual está muy bien si quiere llevarse a cabo la exposición de un trabajo, poner un vídeo, o simplemente disfrutar de una tarde de cine en familia.', 'Cuenta, además, como era de esperar, con conexión Wi-Fi Ultra veloz y Bluetooth 5.0.', 'La batería de este ordenador portátil tiene una duración media de 9 horas, lo cual es una cantidad de tiempo considerable como para estar trabajando con él toda la jornada laboral sin preocuparte de si tendrás suficiente batería o te aguantará sin cargarlo.', 'Por otro lado, cabe destacar que la batería cuenta con una función de carga rápida y que gracias a los iones de litio de 38Wh de los que está formada es mucho más resistente a su consumo y tiene un menor gasto de energía.', 'Opiniones respecto al CHUWI HeroBook Pro', 'Si este ordenador portátil ya se está ganando poco a poco tu corazoncito, te gustará saber que prácticamente todas las valoraciones de los consumidores que lo han comprado por Amazon han sido positivas.', 'Aquí te dejo algunas de esas opiniones para que el CHUWI HeroBook acabe de hacerse un hueco en tu corazón:', '“Compacto e ideal para la ofimática”', '“Sencillamente ideal”', '“Perfecto para el uso pesado”', '“Intuitivo y ágil”', 'Si quieres leer todas las opiniones de los clientes, puedes hacerlo a través de este enlace', '¿Es el CHUWI HeroBook Pro el portátil que deberías comprar?', 'El CHUWI HeroBook es un ordenador muy completo, a buen precio. Sin duda, la opción perfecta si lo que estás buscando uno de los mejores portátiles baratos para tu día a día, con una visualización de alta calidad, una potencia y capacidad de alta gama y con una duración de la batería elevada.","detalle":"PRODUCTO 100% ORIGINAL', 'Portátil Chuwi Herobook Pro 2021', 'Caracteríticas técnicas', 'Compacto, ligero y fácil de transportar',"}//

            }).catch(err => {
                console.log(err)
                if (!err.response) {
                    alert('No se ha podido esablecer conexión con el servidor');
                } else {
                    console.log(err.response)
                }
            })

    }, [id]);
    return (
        <div>
            <Grid container className={classes.fondo}>

                <Grid item xs={12} md={12} lg={12} justify="center">
                    <Box
                        bgcolor="classes.fondo"
                        color="primary.contrastText"
                        minHeight="100vh"
                        textAlign="center"
                    >
                        <Grid item xs={12} md={12} lg={12} direction="column" justify="center">
                            <Box
                                bgcolor="classes.fondo"
                                color="primary.contrastText"
                                minHeight="100px"
                                maxHeight="100px"
                                textAlign="center"
                            >
                                <img className={classes.logo} src={Logo}>
                                </img>

                            </Box>
                            <NavBar>

                            </NavBar>
                            <Trends></Trends>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} className={classes.products} direction="column" justify="center" align="center">
                            <Box
                                bgcolor="classes.fondo"
                                color="black"
                                minHeight="100vh"
                                height="75vh"
                                width='100%'

                                textAlign="left"

                            >
                                {/*<Box
                                    bgcolor="red"
                                    color="black"
                                    maxHeight="75vh"
                                    height="75vh"
                                    width='100%'
                                    textAlign="left"
                                    display='flex'
                                    justifyContent='center'
                                >
                                    <ImageSlider>   

                                    </ImageSlider>

                                </Box>*/}

                                <hr></hr>
                                <Grid className={classes.container} item xs={12} sm={12} md={12} className={classes.paper}>

                                    <Grid className={classes.container} item xs={12} sm={12} md={12} >
                                        <Grid item xs={11} sm={10} md={11} className={classes.productContainer}>
                                            <Grid item xs={11} sm={10} md={11} className={classes.imageContainer}>
                                                <img src={state.product.imagen} alt={state.product.titulo} className={classes.image} />
                                                <Grid item>
                                                    <Link href={state.product.link} variant="body2">
                                                        Ver producto en tienda
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            

                                            

                                            <IconButton aria-label="show 4 new mails" color="inherit" md={1}>
                                                <Badge badgeContent={0} color="secondary">
                                                    <FavoriteBorderIcon />
                                                </Badge>
                                            </IconButton>
                                            <Grid item xs={5} sm={12} md={5} className={classes.description}>
                                                {state.product.titulo ? (
                                                    <h5>
                                                        {state.product.titulo}
                                                    </h5>

                                                ) : (<></>)}
                                                {state.product.descripcion}
                                            </Grid>
                                            <Grid item xs={3} sm={12} md={3} className={classes.timeline}>
                                                <h6>Desarollo de precios</h6>

                                                <IconButton aria-label="show 4 new mails" color="inherit" md={1}>
                                                    <Badge badgeContent={0} color="secondary" className={classes.priceIdeal}>
                                                        <AccessAlarmsIcon /> <div>Definir precio ideal</div>
                                                    </Badge>
                                                </IconButton>
                                            </Grid>

                                        </Grid>



                                    </Grid>

                                </Grid>


                            </Box>

                        </Grid>

                    </Box>

                </Grid>

            </Grid>
        </div>

    )
}

export default withWidth()(Product);
