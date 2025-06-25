import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Owner from './pages/Owner'

function App() {
   return (
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Owner' element={<Owner />} />
      </Routes>);
}

export default App
