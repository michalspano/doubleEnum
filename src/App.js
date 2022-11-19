import React from 'react';
import {StyleSheet, css} from 'aphrodite-jss'
import space from './images/space-accident.gif';
import './index.css';
import { listComponent } from "./ListComponent";
import { home } from "./Home";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Slide from 'react-reveal/Slide';
import {bracelet} from "./Bracelet";



function App() {
  return (
      <React.StrictMode>
        <div className={css(styles.app)}>
            {/*<div className={css(styles.header)}>*/}
            {/*    <span className={css(styles.title)}>double_enum</span>*/}
            {/*    <img src={logo} alt='logo' className={css(styles.logo)} />*/}
            {/*</div>*/}
            <div className={css(styles.flexCenter)}>
                <div className={css(styles.countDownTitle)}>Days until launch!</div>
                <FlipClockCountdown to={new Date("2022-12-12T23:50:21.817Z")} />
            </div>
            {home()}
            <div className={css(styles.listWrapper)}>
                <div className={css(styles.listContainer)}>
                    {listComponent('Further look into the danger of space debris:', 'Our aim is to prevent the unfolding of Kessler’s syndrome. Cascading effect of the debris can be non-reversible rendering it to not be as cost effective to depend on space.')}
                    {listComponent()}
                </div>
                <div className={css(styles.listContainer)}>
                    {listComponent()}
                    {listComponent()}
                </div>
            </div>
            {bracelet()}
        </div>
      </React.StrictMode>
  );
}

export default App;

const styles = StyleSheet.create({
    app: {
        fontFamily: "Montserrat",
        width: '100%',
        height: 5500,
        background: 'linear-gradient(0deg, #1C2541 0%,  #BDCADB 51%, #FFFFFF 100% )',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden'
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
        fontSize: 18,
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
        margin: 250
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
    }

})
