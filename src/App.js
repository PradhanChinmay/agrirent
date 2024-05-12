import './App.css';
import Lend from './screen/Lend';
import Login from './screen/Login';
import Registration from './screen/Registration';
import { createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:'/register',
    element: <Registration />
  },
  {
    path: '/lend',
    element: <Lend />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
