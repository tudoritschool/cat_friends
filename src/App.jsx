import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import CatPage from "./pages/CatPage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			{/* Navigare */}
			<Routes>
				<Route path='/cat/:idCat' element={<CatPage />} />
				<Route path='/cats' element={<HomePage />} />
				<Route path='/' element={<InfoPage />} />
				<Route path='*' element={<h1>NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;

// http://localhost:5173/cat/4
