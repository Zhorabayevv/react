
import React from "react";
import Preloader from "../../common/preloader/Preloader";
import classes from './ProfileInfo.module.css'




const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={classes.imgMain}>
				<img src='https://s.zagranitsa.com/images/blogs/3336/original/b18d28b9341d08e2e95a22dd78a747a6.jpg?1477684813' alt="largePhoto" />
			</div>
			<div className={classes.descriptionBlock}>
				<h1>{props.profile.fullName}</h1>
				<div className={classes.largePhoto}>
					<img src={props.profile.photos.large} alt="largePhoto" />
				</div>
				<h3>{props.profile.aboutMe}</h3>
				<div className={classes.job}>
					
					<br />{props.profile.lookingForAJobDescription}
				</div>
			</div>
		</div>
	)
}


export default ProfileInfo;
