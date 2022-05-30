import { connect } from "react-redux"
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/messagesReducer"
import Messages from "./Messages"



let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (body) => {
			dispatch(updateNewMessageTextCreator(body))
		},
		sendMessage: () => {
			dispatch(sendMessageCreator())
		}
	}
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;