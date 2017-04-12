class NotificationManager {
    notifyUser(message) {
        if (Notification.permission === "granted") {
            // eslint-disable-next-line
            const notification = new Notification(message);
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(permission => {
                if (permission === "granted") {
                    // eslint-disable-next-line
                    const notification = new Notification(message);
                }
            });
        }
    }
}

export const notificationManager = new NotificationManager();
