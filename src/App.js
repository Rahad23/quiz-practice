import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Error from './component/errorPage/Error';
import Topics from './component/topics/Topics';
import Statistics from './component/statistics/Statistics';
import Blog from './component/Blog/Blog';

function App() {
  const routers = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      errorElement: <Error></Error>,
      loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      children:[
        {
          path: '/',
          element: <Topics></Topics>,
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog />
        }
      ]
    }
  ]);
  return (
    <div>
        <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
