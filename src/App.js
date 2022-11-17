import './App.css';
import Home from './pages'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SigninPage from './pages/signin';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/signin' element={<SigninPage/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
