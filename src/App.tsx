import LoveForm	from './components/Loveform';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App(){

	return (

		<Router>
			<div className="App">
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
				
				<NavBarComponent/>
				<FooterComponent/>
			</div>
		</Router>
	);
}

export default App
