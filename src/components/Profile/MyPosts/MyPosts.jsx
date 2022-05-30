
import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {

	let postsElements = props.postsData.map(p => <Post id={p.id} message={p.message} key={p.id} likeCounts={p.likeCount} />)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostTextCreator(text);

	}


	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder="Enter your post" />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>

			<div className={classes.posts}>
				{postsElements}

			</div>
		</div>
	)


}

export default MyPosts;
