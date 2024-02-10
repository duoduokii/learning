import { DECREMENT, INCREMENT } from "../const/counter.const";
import { HIDE, SHOW } from "../const/modal.const";

export const initialState = {
	count: 0,
};

export default function counterReducer(state = initialState, action) {
	if (action.type === INCREMENT) {
		return { ...state, count: state.count + action.payload };
	} else if (action.type === DECREMENT) {
		return { ...state, count: state.count - action.payload };
	} else {
		return state;
	}
}
