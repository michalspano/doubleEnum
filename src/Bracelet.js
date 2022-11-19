import { css, StyleSheet } from "aphrodite-jss";
import React from "react";
import gradient from './images/gradient.png';
import imageCollage from './images/imageCollage.png';
import Slide from 'react-reveal/Slide';
import flareTransparent from './images/flare_transparent.png';
import product_demo from "./images/product_demo.gif";
import bracelet_exp from "./images/bracelet_exp.png";

export function bracelet() {
    window.onscroll = function() {scrollFunction()};

    return (
        <div className={css(styles.generalContainer)}>
            <div className={css(styles.containerTitle)}>
                <div className={css(styles.bigTitle)} id="header" >Zero Waste Space!</div>
                {/*<img src={flareTransparent} alt='image' className={css(styles.imageSm)} />*/}
            </div>

            <div className={css(styles.container)}>

                <div className={css(styles.column)}>
                    <Slide bottom>
                        <span className={css(styles.title)}>Title title</span>
                        <span className={css(styles.desc)}>Lorem Ipsum is simply dummy text of the printing and typesetting inxt of the printing and typesetting inxt of the printing and typesetting inxt of the printing and typesetting industry. Lorem Ipsum has been the industry's s a galley
                        </span>
                    </Slide>
                </div>
            </div>
            <div className={css(styles.wrapper)}>
                <div className={css(styles.titleBracelet)}>You can get a bracelet from space!</div>
                <img src={bracelet_exp} className={css(styles.bracelet)}/>
                <div className={css(styles.braceletWrapper)}>
                    <span className={css(styles.braceletDesc)}>Desc DescDescDescDesc DescDescмDesc Desc v Desc v Desc v v v v vDescDescDescDescDesc </span>
                    <img src={product_demo} className={css(styles.product)}/>
                </div>
            </div>
        </div>
    );
}


function scrollFunction() {
    if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300) {
        document.getElementById("header").style.fontSize = "60px";
    } else {
        document.getElementById("header").style.fontSize = "120px";
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginRight: 260
    },
    generalContainer: {
        marginTop: 260,
        position: 'relative',
        marginLeft: 260,
    },
    containerTitle: {
        position: 'relative',
    },
    imageSm: {
        width: 300,
        height: 300,
        position: 'absolute',
        zIndex: 0,
        top: -115,
        left: -55,
        borderRadius: 500
    },
    title: {
        marginRight: 80,
        marginTop: 80,
        marginBottom: 20,
        fontWeight: 900,
        zIndex: 10,
        fontSize: 32,
    },
    bigTitle: {
        marginBottom: 20,
        fontWeight: 900,
        fontSize: 50,
        color: 'white',
        zIndex: 100,
        transition: 'all 0.3s',
    },
    product: {
        height: 300,
        width: 300,
        borderRadius: '25%'
    },
    titlePage: {
        marginRight: 40,
        marginBottom: 20,
        fontWeight: 900,
        zIndex: 10,
        fontSize: 32,
        position: 'relative'
    },
    desc: {
        width: 400,
        zIndex: 10
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    braceletWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    braceletDesc: {
        fontSize: 22,
        color: 'white',
        margin: 50

    },
    bracelet: {
        width: 700,
        height: 200,
        marginRight: 500,
        marginTop: 100
    },
    wrapper: {
        marginTop: 200,
        margin: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    titleBracelet: {
        marginBottom: 20,
        marginRight: 100,
        marginTop: 100,
        fontWeight: 900,
        fontSize: 40,
        color: 'white',
        zIndex: 100,
        transition: 'all 0.3s',
    }
})
