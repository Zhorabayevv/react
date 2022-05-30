import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path={'/profile'} element={<ProfileContainer />} />
					<Route path={'/profile/:userId'} element={<ProfileContainer />} />
					<Route path={'/messages/*'} element={<MessagesContainer />} />
					<Route path={'/news'} element={<News />} />
					<Route path={'/music'} element={<Music />} />
					<Route path={'/settings'} element={<Settings />} />
					<Route path={'/users'} element={<UsersContainer />} />
				</Routes>
			</div>
		</div>

	);
}

export default App;
