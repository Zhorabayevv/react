import React from "react"
import classes from "./../Messages.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
	let path = "/messages/" + props.id;

	return (
		<div className={classes.dialog + ' ' + classes.active}>
			<NavLink to={path}>
				<img src="https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg" alt="" />
				{props.name}
			</NavLink>
		</div>
	)
}

export default DialogItem;