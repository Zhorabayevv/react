import React from "react";
import classes from "./Users.module.css";
import userIcon from "../../assets/imgs/userIcon.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	pagesCount = Math.max(0, 20);
	let pages = [];

	for (let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className={classes.info}>
			{
				props.usersData.map(u => <div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img className={classes.logo} src={u.photos.small != null ? u.photos.small : userIcon} alt="" />
							</NavLink>
						</div>
						<div>
							{u.followed
								? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									props.setIsFollowingProgress(true, u.id);
									axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
										withCredentials: true,
										headers: {
											"API-KEY": "5bbede82-8c13-4497-885d-c1f641f2e82b"
										}
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.unfollow(u.id)
											}
											props.setIsFollowingProgress(false, u.id);
										});


								}}>Unfollow</button>
								: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									props.setIsFollowingProgress(true, u.id);
									axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
										withCredentials: true,
										headers: {
											"API-KEY": "5bbede82-8c13-4497-885d-c1f641f2e82b"
										}
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.follow(u.id)
											}
											props.setIsFollowingProgress(false, u.id);
										});

								}}>Follow</button>}

						</div>
					</span>
					<span>
						<span>
							<div>
								{u.name}
							</div>
							<div>
								{u.status}
							</div>
						</span>
						<span>
							<div>{'u.location.city'}</div>
							<div>{'u.location.country'}</div>
						</span>
					</span>
				</div>
				)
			}

			<div className={classes.pagination}>
				{pages.map(p => {
					return <p className={props.currentPage === p && classes.selectedPage}
						onClick={(e) => {
							props.onPageChanged(p);
						}}>
						{p}
					</p>
				})}

			</div>
		</div>
	)
}

export default Users