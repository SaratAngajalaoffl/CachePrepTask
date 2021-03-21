import {} from './action_types';

const InitialState = {
	type: '',
	isopen: null,
};

const comments_reducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_MODAL_TYPE:
			return {
				...state,
				type: action.payload,
			};
		case SET_TOGGLE_MODAL:
			return {
				...state,
				isopen: !state.isopen,
			};
		default:
			return InitialState;
	}
};

export default comments_reducer;
