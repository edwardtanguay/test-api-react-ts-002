import { NavLink } from "react-router-dom"

export const Nav = () => {
	return (
		<nav>
			<div><NavLink to="/">HOME</NavLink></div>
			<div><NavLink to="/test001">Test001</NavLink></div>
		</nav>
	)
}