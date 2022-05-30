const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messagesData: [{ id: 1, name: 'Feanor' },
	{ id: 2, name: 'Bekz' },
	{ id: 3, name: 'Areal' },
	{ id: 4, name: 'Gods' }],

	messageData: [{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'Hello world!' }
	],

	newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.body
			};
		case SEND_MESSAGE:
			let body = state.newMessageText;
			return {
				...state,
				newMessageText: '',
				messageData: [...state.messageData, { id: 4, message: body }]
			};
		default:
			return state;
	}
}


export let sendMessageCreator = () => ({ type: SEND_MESSAGE });

export let updateNewMessageTextCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body });


export default messagesReducer;