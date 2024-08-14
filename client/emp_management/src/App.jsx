import Navbar from "./components/navbar/Navbar"
import {Routes,Route} from 'react-router-dom'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import AddEmp from './components/addEmployee/AddEmp'
import './index.css'



const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path='/'  element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/addEmp' element={<AddEmp/>}></Route>
      </Routes>
    </div>
  )
}

export default App
