const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_FOLLOWING_PROGRESS = 'SET_IS_FOLLOWING_PROGRESS';

let initialState = {
	usersData: [],
	pageSize: 4,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SET_USERS: {
			return { ...state, usersData: action.usersData }
		}

		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}

		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}
		case SET_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case SET_IS_FOLLOWING_PROGRESS: {
			return {
				...state, followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: [...state.followingInProgress.filter(id => id !== action.userId)]
			}
		}

		default:
			return state;
	}

}


export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (usersData) => ({ type: SET_USERS, usersData });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export const setIsFollowingProgress = (isFetching, userId) => ({ type: SET_IS_FOLLOWING_PROGRESS, isFetching, userId })

export default usersReducer;