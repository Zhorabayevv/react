
import React from "react";
import classes from './Post.module.css'


const Post = (props) => {
	return (<div>
		<div className={classes.item}>
			<img src="https://im0-tub-kz.yandex.net/i?id=7ebe0f8f85768ebe2e2322428b5201cf-l&n=13" />
			{props.message}
		</div>
		<div className={classes.like}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Facebook_logo_thumbs_up_like_transparent_SVG.svg/2466px-Facebook_logo_thumbs_up_like_transparent_SVG.svg.png" alt="" />
			<span>Like</span>
			<span className={classes.likeCounts}>
				{props.likeCounts}</span>
		</div>

	</div>
	)
}

export default Post;
