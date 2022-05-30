import React from "react";

import classes from './Friends.module.css';

const Friends = (props) => {

	return (
		<div className={classes.friendDiv}>
			Friends
			<div className={classes.friends}>
				<div className={classes.friend}>
					<img src="https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png" alt="poto"/>

					{/* {props.name} */}

				</div>
				<div className={classes.friend}>
					<img src="https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png" alt="phto" />

					{/* {props.name} */}

				</div>
				<div className={classes.friend}>
					<img src="https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png" alt="poto" />

					{/* {props.name} */}

				</div>
			</div>
		</div>

	)
}

export default Friends;
