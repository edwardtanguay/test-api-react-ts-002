import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Test001 } from './components/Test001.tsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/test001",
				element: <Test001/>
			}
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router}/>
)
