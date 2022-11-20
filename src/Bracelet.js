import { css, StyleSheet } from "aphrodite-jss";
import React from "react";
import Slide from 'react-reveal/Slide';
import product_demo from "./images/product_demo.gif";
import bracelet_exp from "./images/bracelet_exp.png";

export function bracelet() {
    window.onscroll = function() {scrollFunction()};

    return (
        <div className={css(styles.generalContainer)}>
            <div className={css(styles.containerTitle)}>
                <div className={css(styles.bigTitle)} id="header" >What do you get from SpaceY?</div>
                    {/*<img src={flareTransparent} alt='image' className={css(styles.imageSm)} />*/}
            </div>

            <div className={css(styles.container)}>

                <div className={css(styles.column)}>
                    <Slide bottom>
                        <span className={css(styles.desc)}>The most recent views on the preservation of the space world. As well as, providing materials for re-usability to different branches of industry.
                        </span>
                    </Slide>
                </div>
            </div>
            <div className={css(styles.wrapper)}>
                <div className={css(styles.titleBracelet)}>You can get a bracelet from space!</div>
                <img src={bracelet_exp} className={css(styles.bracelet)}/>
                <div className={css(styles.braceletWrapper)}>
                    <span className={css(styles.braceletDesc)}>Enjoy cool merch from SpaceY</span>
                    <img src={product_demo} className={css(styles.product)}/>
                </div>
            </div>
        </div>
    );
}


function scrollFunction() {
    if (document.body.scrollTop > 5200 || document.documentElement.scrollTop > 5200) {
        document.getElementById("header").style.fontSize = "60px";
    } else {
        document.getElementById("header").style.fontSize = "80px";
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
        width: 500,
        zIndex: 10,
        fontSize: 20
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
        width: 550,
        height: 150,
        marginRight: 100, // center
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
        fontSize: 29,
        color: 'white',
        zIndex: 100,
        transition: 'all 0.3s',
    }
})
