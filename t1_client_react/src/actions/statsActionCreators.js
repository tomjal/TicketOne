import { checkIfFetchStatusOk, dispatchFetchError } from "./actionFetchHelpers";
import { apiSchema } from "./../api/apiSchema";
import { statsActions } from "./actionTypes";

export function getGlobalSolvedUnsolvedStatistics() {
    return (dispatch) => apiSchema.stats.getGlobalSolvedUnsolvedStats()
        .then(res => checkIfFetchStatusOk(res))
        .then(res => res.json())
        .then(data => {
            dispatch({ type: statsActions.GET_STATS_ALL.SUCCESS, data });
        })
        .catch(err => dispatchFetchError(err, null, dispatch));
}