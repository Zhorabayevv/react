import React from "react"
import classes from "./Messages.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Messages = (props) => {

	let state = props.messagesPage;
	let messagesElements = state.messagesData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
	let messageElements = state.messageData.map(m => <Message message={m.message} key={m.id} id={m.id} />);
	let newMessageText = state.newMessageText;

	let onSendMessageClick = () => {
		props.sendMessage();
	}
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageText(body);
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>

				{messagesElements}

			</div>
			<div className={classes.messages}>
				<div>{messageElements}</div>
				<div>
					<div>
						<textarea value={newMessageText} onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>

		</div>
	)
}
export default Messages;