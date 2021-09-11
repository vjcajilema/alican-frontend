import React from 'react';
//import './Home.css';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";
import ImageSlider from '../../components/imageSlider/Slider';
import ProductsSlider from '../../components/productSlider/Slider';
import NavBar from '../../components/appBar/AppBar';
import Trends from '../../components/trends/Trends';
import Logo from '../../images/Logotipo.png'
import ProductContainer from '../../components/productSlider/ProductContainer'
import ProductApi from '../../api/ProductApi';
import {AppContext} from '../../context/AppContext';
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
    logo: {
      maxHeight:'80px',
    },

}));

const Home = (props) => {
    const classes = estilos();
    const [state, setState] = React.useState({
        products: [],

    });
    const {appState, getProducts,setProducts} = React.useContext(AppContext);
    
    React.useEffect(() => {
        ProductApi.getAll()
            .then(res => {
               console.log(res) 
               if(res.status===200){
                   let productsApi=res.data;
                   let products=[];
                   let product=[];
                   let indexR=0;
                   let detalle=[];
                   let descripcion="";
                   productsApi.forEach((productApi, index)=>{
                       if(productApi['descripcion']!==""){
                            indexR=index+1;
                            detalle="";
                            /*productApi['titulo']=productApi['titulo'].replace("['", "");
                            productApi['titulo']=productApi['titulo'].replace("']", "");
                            productApi['precio']=productApi['precio'].replace("['", "");
                            productApi['precio']=productApi['precio'].replace("']", "");*/
                            productApi['detalle']=productApi['descripcion'];
                            productApi['descripcion']=productApi['descripcion'].replace("['", "");
                            productApi['descripcion']=productApi['descripcion'].replace("']", "");
                            /*productApi['imagen']=productApi['imagen'].replace("['", "");
                            productApi['imagen']=productApi['imagen'].replace("']", "");*/
                            for (let i = 0; i < 130; i++) {
                                if(productApi.descripcion[i]!="-"&&productApi.descripcion[i]!="="){
                                    if(productApi.descripcion[i]&&productApi.descripcion[i]!==null && productApi.descripcion[i]!==undefined){
                                        detalle=detalle+productApi.descripcion[i];
                                    }
                                    
                                }
    
                            }
                            productApi['detalle']=detalle;
                            product.push(productApi);
                            if(indexR%5===0 || productsApi.length===indexR){
                                
                            products.push(product);
                            product=[];
                            }
                       }

                       
                    });
                    
                    console.log(productsApi.length)
                    console.log(products)
                    setProducts(products);
//                    setState({...state, products:products});
          
               }else{
                alert("No se ha podido llamar productos");
               }
            }).catch(err => {
                console.log(err)
                if(!err.response){
                    alert('No se ha podido esablecer conexión con el servidor');
                }else{
                    console.log(err.response)
                }
                //console.log(err.response)

            })
        
    }, []);
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



                                Productos nuevos
                                <hr></hr>
                                <Box
                                    bgcolor="white"
                                    color="black"
                                    minHeight="35vh"
                                    height="35vh"
                                    textAlign="left"

                                >
                                    {getProducts().length>0?( getProducts().map((product, index)=>(
                                        <ProductContainer products={product} key={index}>
                                        </ProductContainer>
                                    ))):(<></>)

                                    }
                                    
                                        
                                </Box>

                                
                            </Box>

                        </Grid>

                    </Box>

                </Grid>

            </Grid>
        </div>

    )
}

export default withWidth()(Home);
