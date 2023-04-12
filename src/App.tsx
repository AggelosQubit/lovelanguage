import LoveForm	from './components/Loveform';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App(){

	return (
		<Router>
			<div className="App container">
				<Routes>
					<Route path='/' />


					<Route path='/' />
					<Route path='/' />
					<Route path='/' />
					<Route path='/' />
					<Route path='/' />

					<Route path='/KnowYourLL' element={<LoveForm/>} />

					<Route path='/' />

				</Routes>
			</div>
		</Router>


	);
}

export default App
