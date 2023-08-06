import LoveForm from './components/LoveformComponent/Loveform';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {

	return (

		<Router>
			<div className="App">
				<NavBarComponent />
				<Routes>
					<Route path='/KnowYourLL' element={<LoveForm />} />
					<Route path='/' />
				</Routes>
				<FooterComponent />
			</div>
		</Router>
	);
}

export default App
