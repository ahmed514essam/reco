import Home from './pages/Home'
import Profile from './pages/Profile'


import './App.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";









const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,

  
  children : [


    {
      path: "/profile/:username",
      element: <Profile />,
    
    },
  ],

  }

]);

function App() {


  return (

    <RouterProvider router={router} />


  );
}

export default App;
