import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Test001 } from './components/Test001.tsx'
import { Test002 } from './components/Test002/Test002.tsx'
import { Test003 } from './components/Test003/Test003.tsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/test001",
				element: <Test001 />
			},
			{
				path: "/test002",
				element: <Test002 />
			},
			{
				path: "/test003",
				element: <Test003/>
			}
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
