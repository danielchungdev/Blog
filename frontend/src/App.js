import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './pages/Add';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/add" element={<Add/>}></Route>
				<Route path="/post/:id" element={<Post/>}></Route>
			</Routes>
		</BrowserRouter>
  	);
}

export default App;
