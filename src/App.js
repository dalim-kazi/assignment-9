 import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Topcs from './components/Topcs/Topcs';
import Blog from './Blog/Blog';
import NotQplede from './components/NotQudet/NotQplede';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        {
          path: "/",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
        {
          path: "/quiz/:Id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
          } ,
          element:<Topcs></Topcs>
        },
        {
          path: "/Blog",
          element:<Blog></Blog>
        },
        {
          path: "/Topcs",
          element:<NotQplede></NotQplede>
        }
      ]
    },
    {path:"*" , element: <div>404 not found</div>}
  ])
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
