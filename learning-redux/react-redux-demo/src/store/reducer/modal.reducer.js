import { HIDE, SHOW } from "../const/modal.const";

export const initialState = {
	show: false,
};

export default function modalReducer(state = initialState, action) {
	if (action.type === SHOW) {
		return { ...state, show: true };
	} else if (action.type === HIDE) {
		return { ...state, show: false };
	} else {
		return state;
	}
}
