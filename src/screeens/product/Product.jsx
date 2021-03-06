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
                //{"id":432019150,"image":"https://http2.mlstatic.com/D_NQ_NP_622520-MEC42188289684_062020-O.jpg","price":"399","name":"Laptop Herobook Pro Chuwi Lenovo Windows 10 Teletrabajo ","description":"PRODUCTO 100% ORIGINAL', 'Port??til Chuwi Herobook Pro 2021', 'Caracter??ticas t??cnicas', 'Compacto, ligero y f??cil de transportar', 'El ordenador port??til CHUWI HeroBook es un ordenador compacto con unas dimensiones de 34,2 cm de alto por 20,9 cm de ancho por 1,3 cm de grosor. Adem??s, pesa 1,46 kg.', 'Gracias a su dise??o y estas medidas se hace un port??til ideal para el trabajo. Es muy f??cil de llevar de un lado para otro, sin necesidad de que esta sea excesivamente grande. Adem??s, su peso que no llega ni al kilo y medio contribuye a su f??cil transporte y tambi??n lo hace la ligereza de los materiales externos, sin muchos alardes.', 'Pantalla antirreflectante y Full HD', 'La pantalla del CHUWI HeroBook Pro es de 14.10 pulgadas. Cuenta con una resoluci??n m??xima en Full HD, es decir, 1920 x 1080 p??xeles IPS Ultra, al igual que su hermano mayor CHUWI Aerobook.', 'Esto contribuye a que las im??genes se muestren de manera clara y v??vida, con gran precisi??n en los detalles, para ofrecer una experiencia visual que ordenadores de gama m??s alta, y mayor precio, ya dicen ofrecer.', 'Adem??s, cuenta con una tecnolog??a antirreflejo que junto con el modo nocturno y la posibilidad de configurar la gama de colores reducir??n el posible cansancio de los ojos despu??s de estar mirando la pantalla durante largos per??odos de tiempo.', 'Chuwi herobook', 'Informaci??n acerca del procesador y el disco duro', 'El CHUWI HeroBook tiene un procesador Intel N4020 Quad-Core, adem??s con su tecnolog??a Turbo Boost puede alcanzar velocidades de hasta 2.80 GHz. Gracias a este procesador se puede disfrutar de un gran rendimiento y velocidad, siempre adecuadas a su precio, a la hora de ejecutar archivos, programas, cargar im??genes o ver v??deos. Es un ordenador que se caracteriza por una gran fluidez.', 'En lo referente a su disco duro, el CHUWI HeroBook tiene un disco duro con una SSD de 256 GB libres, pero, para ampliar la capacidad de almacenamiento, ofrece la posibilidad de a??adir una segunda SSD con hasta 2 TB de capacidad.', 'El hecho que posibilite ampliar la memoria de la SSD y su espacio de almacenamiento es muy positivo, ya que por un precio realmente econ??mico se puede tener un espacio y capacidad de almacenamiento incre??bles, que, ni siquiera, muchos de los ordenadores de alta gama, o con precios mucho m??s elevados, tienen.', 'Memoria RAM y la tarjeta gr??fica:', 'EL port??til CHUWI HeroBook tiene una memoria RAM de 8 GB LPDDR4. Puede abrir muchas p??ginas, programas y documentos para trabajar con ellos al mismo tiempo.', 'La tarjeta gr??fica que utiliza es una Intel UHD 600. Lo cual permite disfrutar de unos gr??ficos en alta definici??n y tener una experiencia ??ptica de lo m??s placentera, con unos colores muy claros en cuanto a nitidez y nada saturados por el brillo.', 'Conectividad y bater??a del CHUWI HeroBook Pro', 'En cuanto a sus servicios respecto a conectividad, estos son bastante completos; y es que el CHUWI HeroBook Pro cuenta con una entrada para puerto HDMI, otra para Ethernet y otra entrada de micr??fono.', 'Adicionalmente, puede conectarse a un proyector, lo cual est?? muy bien si quiere llevarse a cabo la exposici??n de un trabajo, poner un v??deo, o simplemente disfrutar de una tarde de cine en familia.', 'Cuenta, adem??s, como era de esperar, con conexi??n Wi-Fi Ultra veloz y Bluetooth 5.0.', 'La bater??a de este ordenador port??til tiene una duraci??n media de 9 horas, lo cual es una cantidad de tiempo considerable como para estar trabajando con ??l toda la jornada laboral sin preocuparte de si tendr??s suficiente bater??a o te aguantar?? sin cargarlo.', 'Por otro lado, cabe destacar que la bater??a cuenta con una funci??n de carga r??pida y que gracias a los iones de litio de 38Wh de los que est?? formada es mucho m??s resistente a su consumo y tiene un menor gasto de energ??a.', 'Opiniones respecto al CHUWI HeroBook Pro', 'Si este ordenador port??til ya se est?? ganando poco a poco tu corazoncito, te gustar?? saber que pr??cticamente todas las valoraciones de los consumidores que lo han comprado por Amazon han sido positivas.', 'Aqu?? te dejo algunas de esas opiniones para que el CHUWI HeroBook acabe de hacerse un hueco en tu coraz??n:', '???Compacto e ideal para la ofim??tica???', '???Sencillamente ideal???', '???Perfecto para el uso pesado???', '???Intuitivo y ??gil???', 'Si quieres leer todas las opiniones de los clientes, puedes hacerlo a trav??s de este enlace', '??Es el CHUWI HeroBook Pro el port??til que deber??as comprar?', 'El CHUWI HeroBook es un ordenador muy completo, a buen precio. Sin duda, la opci??n perfecta si lo que est??s buscando uno de los mejores port??tiles baratos para tu d??a a d??a, con una visualizaci??n de alta calidad, una potencia y capacidad de alta gama y con una duraci??n de la bater??a elevada.","detalle":"PRODUCTO 100% ORIGINAL', 'Port??til Chuwi Herobook Pro 2021', 'Caracter??ticas t??cnicas', 'Compacto, ligero y f??cil de transportar',"}//

            }).catch(err => {
                console.log(err)
                if (!err.response) {
                    alert('No se ha podido esablecer conexi??n con el servidor');
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
