import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return <header className={classes.header}>
		<img src='https://i.pinimg.com/originals/a8/44/2b/a8442bb57f20d20cafb309a527e47430.png' alt="photoo"/>

		<div className={classes.loginBlock}>
			{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
			
		</div>
	</header>
}

export default Header;
