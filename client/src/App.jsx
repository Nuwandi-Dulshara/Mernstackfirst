import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Navbar from './Components/Navbar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/signin' element={<SignIn/>} ></Route>
      <Route path='/signup' element={<SignUp/>} ></Route>
      <Route path='/home' element={<Home/>} ></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
