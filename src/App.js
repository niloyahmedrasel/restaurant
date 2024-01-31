import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    <div><Toaster/></div>
    </div>
  );
}

export default App;
