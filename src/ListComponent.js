import {css, StyleSheet} from "aphrodite-jss";
import React from "react";
import Fade from "react-reveal/Fade";

export const listComponent = (title, desc) => {
    return (
        <Fade top>
            <div className={css(styles.listItemContainer)}>
                <span className={css(styles.listItemTextTitle)}>{title}</span>
                <span className={css(styles.listItemText)}>{desc}</span>
                <div className={css(styles.listItemCircle)} />
            </div>
        </Fade>
    );
}


const styles = StyleSheet.create({
    listItemContainer: {
        position: 'relative',
        display: 'flex',
        border: '#1C2541 1px',
        borderRadius: 20,
        backgroundColor: '#C4E8E8',
        width: 380,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
        zIndex: 100,
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            boxShadow: '0 5px 15px #1C2541',
            transform: 'scale(0.98)',
        },
        height: 220

    },
    listItemCircle: {
        position: 'absolute',
        left: -20,
        top: -15,
        width: 35,
        height: 35,
        borderRadius: 100,
        border: '#3A506B 6px solid',
        zIndex: 1
    },
    listItemText: {
        padding: 30,
    },
    listItemTextTitle: {
        fontWeight: 'bold',
        padding: 20,
        paddingBottom: 0
    }

})
