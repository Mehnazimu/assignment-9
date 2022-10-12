import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        }


      ]
    },
    {
      path: '*', element: <Error></Error>
    }


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
