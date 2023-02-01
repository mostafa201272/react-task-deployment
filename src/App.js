// Components
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Pages
import CreateCustomer from './Pages/CreateCustomerPage/CreateCustomerPage';
import Home from './Pages/Home/HomePage';
import RootPage from './Pages/RootPage/RootPage';
import Splash from './Pages/SplashScreen/Splash';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Routes
const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {path: '/', element: <Home />},
      {path: '/create-customer', element: <CreateCustomer />},
    ]
  }
])


function App() {
  return (
    <>
      {/* Loading Splash Screen */}
      <Splash />

      {/* Routers */}
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
