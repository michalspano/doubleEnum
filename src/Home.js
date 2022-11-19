import { css, StyleSheet } from "aphrodite-jss";
import React from "react";
import gradient from './images/gradient.png';
import imageCollage from './images/imageCollage.png';
import Slide from 'react-reveal/Slide';
import flareTransparent from './images/flare_transparent.png';
import space from "./images/space-accident.gif";

export function home() {
    return (
        <div>
            <div className={css(styles.containerDesc)}>
                <Slide bottom>
                    <div className={css(styles.column)}>
                        <div className={css(styles.title)}>Motivation:</div>
                        <span className={css(styles.desc)}>Space debris such as human made payload (objects from wear and tear, collisions) pose a significant danger to communication satellites, telescopes, spacecrafts as well as crew members on missions. These debris can also fall back to Earth after orbital decay.</span>
                        <span className={css(styles.desc)}>This galvanized us to come up with an idea to not only keep a check on such debris in space but also transport them back to earth for re-use.
                        </span>
                    </div>
                </Slide>
                <Slide bottom>
                    <img src={space} alt="Loading..." />
                </Slide>
            </div>
            <div className={css(styles.containerDesc)}>
                <span className={css(styles.aim)}>AIM: Zero Waste Space!</span>
            </div>
            <div className={css(styles.container)}>
                <Slide bottom>
                    <img src={imageCollage} alt='image' className={css(styles.image)}/>
                </Slide>
                <div className={css(styles.column)}>
                    <img src={flareTransparent} alt='image' className={css(styles.imageSm)} />
                    <Slide bottom>
                        <span className={css(styles.title)}>Title title</span>
                        <span className={css(styles.desc)}>Lorem Ipsum is simply dummy text of the printing and typesetting inxt of the printing and typesetting inxt of the printing and typesetting inxt of the printing and typesetting industry. Lorem Ipsum has been the industry's s a galley
                        </span>
                    </Slide>
                </div>
            </div>
            {/*<div className={css(styles.flexCenter)}>*/}
            {/*    <marquee BEHAVIOR="alternate" SCROLLAMOUNT="10" loop='-1'  direction="right" className={css(styles.line)}>DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM DOUBLE ENUM </marquee>*/}
            {/*</div>*/}
        </div>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 260
    },
    containerDesc: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 260
    },
    title: {
        marginRight: 40,
        marginBottom: 20,
        fontWeight: 900,
        zIndex: 10,
        fontSize: 32
    },
    desc: {
        width: 400,
        zIndex: 10,
        marginBottom: 20,
        marginRight: 20
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    columnStart: {
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        width: 800,
        height: 800,
        margin: 40,
        zIndex: 10
    },
    imageSm: {
        width: 300,
        height: 300,
        position: 'absolute',
        zIndex: 0,
        top: 260,
        right: 290,
    },
    line: {
        minWidth: '100%',
        fontSize: 25,
        color: '#3994D0',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        animation: 'moveSlideshow 5s linear infinite'


    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aim: {
        fontSize: 40,
        padding: 40,
        fontWeight: 'bold',
        boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.05)',
    }


})
