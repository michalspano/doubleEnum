import { css, StyleSheet } from "aphrodite-jss";
import React from "react";
import gradient from './images/gradient.png';
import imageCollage from './images/imageCollage.png';
import Marquee from "react-double-marquee/dist/bundle.esm";
import Zoom from 'react-reveal/Zoom';

export function home() {
    return (
        <div>
            <div className={css(styles.container)}>
                <Zoom>
                    <img src={imageCollage} alt='image' className={css(styles.image)}/>
                </Zoom>
                <div className={css(styles.column)}>
                    <img src={gradient} alt='image' className={css(styles.imageSm)} />
                    <span className={css(styles.title)}>Title title</span>
                    <span className={css(styles.desc)}>Lorem Ipsum is simply dummy text of the printing and typesetting inxt of the printing and typesetting inxt of the printing and typesetting inxt of the printing and typesetting industry. Lorem Ipsum has been the industry's s a galley
                    </span>
                </div>
            </div>
            <div style={{ width: '2000px',  whiteSpace: 'nowrap', marginTop: 50, marginBottom: 50, fontSize: 30 }} >
                <Marquee speed={0.1} >
                    DOUBLE ENUM
                </Marquee>
            </div>
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
        margin: 40
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
        zIndex: 10
    },
    column: {
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
        top: 300,
        right: 280
    },
    line: {
        fontSize: 25,
        color: '#3994D0'
    },
    line2: {
        fontSize: 25,
        color: '#0B132B',
        position: 'absolute',
        right: 2
    }


})
