export function timestampToDateString(ts) {
    function pad(n) { return n < 10 ? '0' + n : n }

    let d = new Date(ts);
    let dateString = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    let timeString = pad(d.getHours()) + ':' + pad(d.getMinutes());
    return timeString + ' ' + dateString;
}
