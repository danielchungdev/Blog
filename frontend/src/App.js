import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './pages/Add';
import Home from './pages/Home';
import Post from './pages/Post';
import NotFound from './pages/NotFound'
import Resume from './pages/Resume'

function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/add" element={<Add/>}></Route>
				<Route path="/post/:id" element={<Post/>}></Route>
				<Route path="/post/:id" element={<Post/>}></Route>
				{/* <Route path="/resume" element={<Resume/>}></Route> */}
				<Route path="*" element={<NotFound/>}></Route>
			</Routes>
		</BrowserRouter>
  	);
}

export default App;
