import React from 'react';
import './App.css';
import MainComponent from './screens/Main';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<MainComponent />
		</Provider>
	);
}

export default App;
