import { browserHistory } from 'react-router';

class HistoryManager {
    goBack() {
        browserHistory.goBack();
    }
}

export const historyManager = new HistoryManager();
