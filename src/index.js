import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './components/RTK/app/store';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shimmer from './components/Shimmer';
// import MeLazy from './components/MeLazy';

// lazy import 

const MeLazy = lazy(()=>delayForDemo(import("./components/MeLazy")));

const AppRouter = () =>{
  return(
    <Provider store={store}>
    <App />
    <Outlet/>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
 {
  path:"/",
  element: <AppRouter/>,
  children:[
    
    {
      path:"/lazy",
      element: <Suspense fallback={<Shimmer/>}><MeLazy/></Suspense>
    }
  ]

 }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
);

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
