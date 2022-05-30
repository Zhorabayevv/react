const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	postsData: [{ id: 1, message: 'Hello world!', likeCount: 15 },
	{ id: 2, message: 'Privet mir!', likeCount: 16 }],
	newPostText: 'Salemberdik',
	profile: null
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				newPostText: '',
				postsData: [...state.postsData, {
					id: 5,
					message: state.newPostText,
					likeCount: 0
				}]
			};

		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}

		default:
			return state;
	}
}

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;