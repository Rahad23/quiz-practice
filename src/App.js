import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/main/Main';
import Error from './component/errorPage/Error';
import Topics from './component/topic/Topics';
import Statistics from './component/statistics/Statistics';
import Blog from './component/Blog/Blog';
import Quiz from './component/quiz/Quiz';
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
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path:'quiz/:id',
          loader: async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<Quiz></Quiz>
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
