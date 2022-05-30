import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import classes from './Navbar.module.css';

const Navbar = (props) => {

	// let friendElements = props.friendData.map(f => <Friends id={f.id} name={f.name} />)

	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<NavLink to="/profile" className={navData => navData.isActive ? classes.active : ''}>
					<strong>Profile</strong>
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/messages" className={navData => navData.isActive ? classes.active : ''}>
					<strong>Messages</strong>
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/news" className={navData => navData.isActive ? classes.active : ''}>
					<strong>News</strong>
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/users" className={navData => navData.isActive ? classes.active : ''}>
					<strong>Users</strong>
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/music" className={navData => navData.isActive ? classes.active : ''}>
					<strong>Music</strong>
				</NavLink>
			</div>
			<div className={classes.settings}>
				<NavLink to="/settings" className={navData => navData.isActive ? classes.active : ''}>
					<strong>Settings</strong>
				</NavLink>
			</div>

			<Friends />
			{/* <Friends navBar={props.state.friendData} />
			{friendElements}
			 */}
		</nav>
	)
}

export default Navbar;
