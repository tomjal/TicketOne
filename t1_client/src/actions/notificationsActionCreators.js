import { notificationManager } from './../services/notificationManager';

export function notifyAboutNewRoom(message) {
    return (dispatch) => {
        notificationManager.notifyUser(`New clients room - ${message}`);
    }
}

export function notifyAboutNewMessage(message) {
    return (dispatch) => {
        notificationManager.notifyUser(`New message - ${message}`);
    }
}
