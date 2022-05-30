import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setIsFetching, setUsers, setTotalUsersCount, unfollow, setIsFollowingProgress} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { userApi } from "../../api/userAPI";

class UsersAPIContainer extends React.Component {

	componentDidMount() {
		this.props.setIsFetching(true);
		userApi.getUsers(this.props.currentPage, this.props.pageSize)
		.then(data => {
			this.props.setIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.setIsFetching(true);
		
		userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.setIsFetching(false);
			this.props.setUsers(data.items);
		});
	}

	render() {

		return <>
			{this.props.isFetching ? <Preloader /> : <Users
				usersData={this.props.usersData}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				onPageChanged={this.onPageChanged}
				setIsFollowingProgress={this.props.setIsFollowingProgress}
				followingInProgress={this.props.followingInProgress}
			/>}

		</>
	}
}



let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(follow(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollow(userId));
// 		},
// 		setUsers: (usersData) => {
// 			dispatch(setUsers(usersData));
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPage(pageNumber));
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCount(totalCount))
// 		},
// 		setIsFetching: (isFetching) => {
// 			dispatch(setIsFetching(isFetching))
// 		}
// 	}
// }

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setIsFollowingProgress})(UsersAPIContainer);


export default UsersContainer;