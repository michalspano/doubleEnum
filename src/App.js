import React from 'react';
import {StyleSheet, css} from 'aphrodite-jss'
import logo from './images/double_enum.png';
import './index.css';
import { listComponent } from "./ListComponent";
import { home } from "./Home";


function App() {
  return (
      <React.StrictMode>
        <div className={css(styles.app)}>
            <div className={css(styles.header)}>
                <span className={css(styles.title)}>double_enum</span>
                <img src={logo} alt='logo' className={css(styles.logo)} />
            </div>
            {home()}
            <div className={css(styles.listContainer)}>
                {listComponent()}
                {listComponent()}
            </div>
            <div className={css(styles.listContainer)}>
                {listComponent()}
                {listComponent()}
            </div>
            <div className={css(styles.bottom)}>

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
        height: 4000,
        background: 'linear-gradient(0deg, #1C2541 0%,  #BDCADB 51%, #FFFFFF 85% )',
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
        color: 'white'
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

})
