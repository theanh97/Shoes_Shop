import {
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE
} from "../actions/action_types";

let dataState = {
	data: "",
	loading: true
};

export const fetchDataReducer = (state = dataState, action) => {
	switch (action.type) {
		case FETCH_DATA_SUCCESS:
			// state = Object.assign({}, state, { data: action.data, loading:false });
			state = {
				data: action.data,
				loading: false
			};
			return state;
		case FETCH_DATA_FAILURE:
			state = {
				data: action.data,
				loading: false
			};
			return state;

		default:
			return state;
	}
};
