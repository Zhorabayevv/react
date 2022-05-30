import React from "react";
import classes from "./Preloader.module.css"

const Preloader = (props) => {
	return <div>
		<div className={classes.circle}></div>
		<div className={classes.container}>
			<div className={classes.dot}>
				<div className={classes.dot1}></div>
				<div className={classes.dot2}></div>
				<div className={classes.dot3}></div>
			</div>
		</div>
	</div>
}

export default Preloader;