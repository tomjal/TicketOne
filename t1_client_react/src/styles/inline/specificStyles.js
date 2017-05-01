import { StyleSheet } from 'aphrodite';

// Pretty useless, everything here should be refactored

export const loginStyles = StyleSheet.create({
    thumbnailWidget: {
        height: "100%",
        padding: "20px",
        paddingLeft: "70px",
        textAlign: "left",
        '@media (max-width: 400px)': {
            paddingLeft: "45px"
        }
    },
    inputRow: {
        verticalAlign: "top",
        height: "35px",
        margin: "5px",
        marginLeft: "0px"
    }
});

export const chatStyles = StyleSheet.create({
    window: {
        marginTop: "10xp",
        marginBottom: "10px"
    },
    span: {
        marginLeft: "10px",
        marginRight: "10px"
    },
    box: {
        display: "inline-block",
        width: "270px",
        marginRight: "20px",
        '@media (max-width: 400px)': {
            width: "150px",
        }
    },
    list: {
        width: "100%",
        height: "255px",
        overflow: "auto",
        padding: "10px",
        marginTop: "5px",
        marginBottom: "15px",
        background: "#f1f3f4"
    },
    bubbleBase: {
        width: "300px",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        background: "white",
        '@media (max-width: 400px)': {
            width: "200px",
        }
    },
    bubbleLeft: {
        textAlign: "left"
    },
    bubbleRight: {
        marginLeft: "115px",
        textAlign: "right"
    }
});