import { history } from './../store/createHistory';

class HistoryManager {
    goBack() {
        history.goBack();
    }
}

export const historyManager = new HistoryManager();
