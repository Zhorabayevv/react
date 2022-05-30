import { connect } from "react-redux";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostTextCreator: (text) => {
			let action = updateNewPostTextCreator(text);
			dispatch(action);
		},
		addPost: () => {
			dispatch(addPostCreator());
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
