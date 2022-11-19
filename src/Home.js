import { css, StyleSheet } from "aphrodite-jss";
import React from "react";
import gradient from './images/gradient.png';
import imageCollage from './images/imageCollage.png';
import Slide from 'react-reveal/Slide';
import flareTransparent from './images/flare_transparent.png';
import space from "./images/space-accident.gif";
import demo from './images/demo.png';

export function home() {
    return (
        <div>
            <div className={css(styles.containerDesc)}>
                <Slide bottom>
                    <div className={css(styles.column)}>
                        <img src={flareTransparent} alt='image' className={css(styles.imageSm)} />
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
            <div className={css(styles.containerDemo)}>
                <div className={css(styles.column)}>
                    <Slide bottom>
                        <span className={css(styles.title)}>Product prototype</span>
                    </Slide>
                </div>
                <Slide bottom>
                    <img src={demo} alt='image' className={css(styles.demo)}/>
                </Slide>
            </div>
            <div className={css(styles.flex)}>
                <span className={css(styles.descTitle)}>
                    TECHNICAL SPECIFICATIONS AND REASONING OF OUR MODEL:
                </span>
                <span>Space has an extremely low pressure and density. Hence, we can conclude it to be a vacuum. Therefore, the law of inertia is respected which we have to consider in the design of our model.
                </span>
                <ol>
                    <li>We decided to use a gyroscope in our model as the angular momentum is conserved. It will have 3 degrees of freedom. Hence, the bot can rotate about 3 axises.</li>
                    <li>Gyroscopic motion provides stability due to tendency of rotating objects to maintain its orientation of rotation [follows Newton’s first law pop motion also known as the law of inertia].
                    </li>
                    <li>There will be 3 Reaction wheels placed in the centre of our model. It has several advantages: it does not consume fuel; it is relatively power efficient; does not rely on the magnetic field. However, a few disadvantages of the same is that it generates micro-vibrations and needs lubrication.
                    </li>
                    <li>The bot will be self powered by solar panels and can also move around via thrusters.
                    </li>
                    <li>There will be 4 debris collecting extrusions to increase the surface area and have maximum usage of the bot.
                    </li>
                    <li>2 types of debris to consider in our MVP: metallic payload and small rocks/ meteoroids</li>
                    <li>Dimensions of our bot: 2m X 2m. 98% of our debris are under 10 cm.</li>
                    <li>Damping materials reduces the force upon impact and dissipates the increased heat of the incoming debris. Sorbothane can be a potential material used in the interior of the bot.</li>
                    <li>We envision our end product to be a swarm of robots as it makes it more feasible.</li>
                    <li>Sensor technology will be used to locate the debris. 2 types of sensor technologies:</li>
                    <li>* LIDAR sensor: for the location and size of debris
                        * Stabilisation sensor: for the location and orientation of the bot</li>
                    <li>The debris upon entering the bot will be faced by a cushioning effect done by elastic dampening to reduce the force upon impact. It will then be stored in the body of the bot.</li>
                </ol>
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
        marginTop: 160
    },
    containerDemo: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 260
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '60%',
        marginLeft: 190
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
        top: -100,
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
    },
    demo: {
        width: 700,
        height: 450,
        margin: 100,
    },
    descTitle: {
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 90
    }


})
