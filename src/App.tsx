import { useState } from 'react'
import LoveForm	from './components/Loveform';
import reactLogo from '/img/LLL1.png'
import './App.css';
 
function App(){

  
const [count, setCount] = useState(0)

	return (
		<div className="container">
			{/*<NavbarComponent/>*/}
			<LoveForm/>
		</div>
	);
}

export default App
