import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./action_types";

export function fetchDataFromUrl(url) {
	return dispatch => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: FETCH_DATA_SUCCESS,
					data: JSON.stringify(data)
				});
			})
			.catch(error => {
				dispatch({
					type: FETCH_DATA_FAILURE,
					data: JSON.stringify(error)
				});
			})
			.done();
	};
}
