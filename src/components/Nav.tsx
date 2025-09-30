import { NavLink } from "react-router-dom"

export const Nav = () => {
	return (
		<nav>
			<div><NavLink to="/">HOME</NavLink></div>
			<div><NavLink to="/test001">Test001</NavLink></div>
			<div><NavLink to="/test002">Test002</NavLink></div>
			<div><NavLink to="/test003">Test003</NavLink></div>
		</nav>
	)
}