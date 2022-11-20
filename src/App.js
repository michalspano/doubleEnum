import React from 'react';
import {StyleSheet, css} from 'aphrodite-jss'
import './index.css';
import { listComponent } from "./ListComponent";
import { home } from "./Home";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Slide from 'react-reveal/Slide';
import {bracelet} from "./Bracelet";
import imageCollage from "./images/imageCollage.png";

function App() {
  return (
      <React.StrictMode>
        <div className={css(styles.app)}>
            <div className={css(styles.flexCenter)}>
                <div className={css(styles.countDownTitle)}>Days until launch:</div>
                <FlipClockCountdown showSeparators={true} to={new Date("2025-12-12T23:50:21.817Z")} />
            </div>
            <div className={css(styles.flexCenter)}>
                <div className={css(styles.youtubeEmbed)}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/R1ahY4JNKQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            {home()}
            <div className={css(styles.listWrapper)}>
                <div className={css(styles.listContainer)}>
                    {listComponent('FURTHER LOOK INTO THE DANGER OF SPACE DEBRIS:', 'Our aim is to prevent the unfolding of Kessler’s syndrome. Cascading effect of the debris can be non-reversible rendering it to not be as cost effective to depend on space.')}
                    {listComponent('SPACE DEBRIS PRODUCING EVENTS:', 'The prolific disintegration of Fengyun - 1C produced thousands of fragments orbiting the Earth and posed a constant harm to ISS and other equipments in space.')}
                </div>
                <div className={css(styles.listContainer)}>
                    {listComponent('OVERVIEW OF THE LOCATION OF SPACE DEBRIS:', 'Low Earth Orbit is where majority of our satellites and telescopes are located. Defunct satellites, rocket thrusters, fragmentation debris further increases the object density in the area.')}
                    {listComponent('SUSTAINABILITY ASPECT:', 'By capturing and transporting the debris human made back to Earth, we can re-use the scraps in various industries. The meteoroids brought in could also be used for research and studies.')}
                </div>
            </div>
            {bracelet()}
            <div className={css(styles.container)}>
                <Slide bottom>
                    <img src={imageCollage} alt='image' className={css(styles.image)}/>
                </Slide>
                <div className={css(styles.column)}>
                    <Slide bottom>
                          <span className={css(styles.title)}>Our team: Michal Spano, Ionel Pop, Mariia Zabolotnia, Agrima Singh!</span>
                    </Slide>
                </div>
            </div>
        </div>
      </React.StrictMode>
  );
}

export default App;

const styles = StyleSheet.create({
    app: {
        fontFamily: "Montserrat",
        width: '100%',
        height: 7000,
        background: 'linear-gradient(0deg, #1C2541 0%,  #BDCADB 51%, #FFFFFF 100% )',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden'
    },
    container: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 160
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#1C2541',
        height: 70,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },
    logo: {
        width: 50,
        height: 50
    },
    listContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 150
    },
    countDownTitle: {
        fontSize: 30,
        margin: 50,
        color: '#1C2541',
        fontWeight: 'bold'
    },
    listWrapper: {
        marginTop: 260,
        marginBottom: 260
    },
    image: {
        width: 1000,
        height: 1000,
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
    youtubeEmbed: {
        width: 560,
        height: 315,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(0.98)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        }
    }
})
