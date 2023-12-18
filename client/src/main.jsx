import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import ItemList from './components/itemList/ItemList.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx'
// import Cart from './components/cart/Cart.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ItemList />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/users/:userId',
        element: <Favorites />
      }, 
      // {
      //   path: 'cart',
      //   element: <Cart />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
