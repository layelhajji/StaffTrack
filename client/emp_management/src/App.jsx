import Navbar from "./components/navbar/Navbar"
import {Routes,Route} from 'react-router-dom'
import L

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
