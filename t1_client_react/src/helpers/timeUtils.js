import Moment from 'moment';

export function timestampToDateString(timestamp) {
    const dateString = Moment(timestamp).calendar();
    return dateString
}
