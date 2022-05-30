import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	,
	document.getElementById('root')
);


// store.subscribe(() => {     
// 	let state = store.getState();
// 	rerenderTree(state);   неэффективно перерисовывать весь проект если только мы добавили пост или сообщение
// надо перерисовать только посты
// });

reportWebVitals();
