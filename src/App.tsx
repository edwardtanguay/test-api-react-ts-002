import { Outlet } from "react-router-dom"
import { Nav } from "./components/Nav"

function App() {

	return (
		<>
			<h1>App 001</h1>
			<p>Welcome to this app.</p>
			<Nav />

			<div className="areas">
				<Outlet />
			</div>
		</>
	)
}

export default App
