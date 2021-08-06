import React from 'react';
import { Grid, makeStyles, Box, Button, withWidth } from "@material-ui/core";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import Product from './Product'
//valores para pruebas
import ImgApple12 from '../../images/develop/apple12idealo.png'
const useStyles = makeStyles((theme) => ({

    header: {
        background: 'transparent',

    },
    navbar: {
        background: '#375f86',

    },
    slider: {
        height: '100%',
        background: 'yellow',


    },
}));
const items = [

];

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const classes = useStyles();

    const [state, setState] = React.useState({
        products: [1, 2, 3, 4],
        activeIndex: 0,
        animating: false,

    });
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className={classes.grow} src={item.src} alt={item.altText} />

                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });


    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators className='row' items={items} activeIndex={activeIndex} onClickHandler={goToIndex} direction="row" />
            
                {state.products.map((product, index) => (
                    <Product key={index} image={ImgApple12} price={800.00} name={"Apple 12"} description={"celular de marca apple"}>

                    </Product>
                ))}
            

            <CarouselControl color="black" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    )
}

export default withWidth()(Slider);
