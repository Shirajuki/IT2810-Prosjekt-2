import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
	const backup = (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
	const template = (
		<div className="App">
		</div>
	)
	return template;
}

export default App;
