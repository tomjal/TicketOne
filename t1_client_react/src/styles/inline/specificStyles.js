import { StyleSheet } from 'aphrodite';

// Pretty useless, everything here should be refactored

const chatlistShadow = "rgba(0, 0, 0, 0.2) 0px 0px 1px 0px, rgba(0, 0, 0, 0.1) 0px 1px 5px 0px";
const messageHeaderTextColor = "gray";
const messageBodyTextColor = "black";
const messageBaseFontSize = "1.4rem";

export const chatWindowStyles = StyleSheet.create({
    chatWindow: {
        marginTop: "10xp",
        marginBottom: "10px"
    },
    chatInput: {
        display: "inline-block",
        width: "270px",
        marginRight: "20px",
        '@media (max-width: 400px)': {
            width: "150px",
        }
    },
    actionBlock: {
        marginLeft: "10px",
        marginRight: "10px"
    }
});

export const chatListStyles = StyleSheet.create({
    listBlock: {
        width: "100%",
        height: "255px",
        overflow: "auto",
        padding: "10px",
        marginTop: "5px",
        marginBottom: "15px",
        background: "#f1f3f4",
        boxShadow: chatlistShadow
    }
});

export const chatBubbleStyles = StyleSheet.create({
    chatBubbleBase: {
        width: "300px",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        background: "white",
        '@media (max-width: 400px)': {
            width: "200px",
        }
    },
    chatBubbleLeft: {
        textAlign: "left"
    },
    chatBubbleRight: {
        marginLeft: "115px",
        textAlign: "right"
    },
    chatMessageHeader: {
        color: messageHeaderTextColor,
        fontSize: messageBaseFontSize * 0.8
    },
    chatMessaheContent: {
        color: messageBodyTextColor,
        fontSize: messageBaseFontSize,
        wordWrap: "break-word"
    }
});
