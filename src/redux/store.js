import messagesReducer from "./messagesReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";


let store = {
	_state: {
		messagesPage: {
			messagesData: [{ id: 1, name: 'Feanor' },
			{ id: 2, name: 'Bekz' },
			{ id: 3, name: 'Areal' },
			{ id: 4, name: 'Gods' }],

			messageData: [{ id: 1, message: 'Hi' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'Hello world!' }
			],

			newMessageText: ''
		},

		profilePage: {
			postsData: [{ id: 1, message: 'Hello world!', likeCount: 15 },
			{ id: 2, message: 'Privet mir!', likeCount: 16 }],
			newPostText: 'Salemberdik'
		},

		navBar: {
			// 	friendData: [{ id: 1, name: 'Feanor' },
			// 	{ id: 2, name: 'Bekz' },
			// 	{ id: 3, name: 'Areal' }
			// 	]
		}
	},

	_callSubscriber() {
		console.log('adsf');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
		this._state.navBar = navBarReducer(this._state.navBar, action);

		this._callSubscriber(this._state);

	}
}




// export let addMessage = (plusMessage) => {
// 	let newMessage = {
// 		id: 4,
// 		message: plusMessage
// 	}
// 	state.messagesPage.messageData.push(newMessage);
// 	rerenderTree(state);
// }


// store OOP

export default store;