import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './pages/Add';
import Home from './pages/Home';

function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/add" element={<Add/>}></Route>
			</Routes>
		</BrowserRouter>
  	);
}

export default App;
