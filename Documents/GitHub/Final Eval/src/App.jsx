import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AddCity } from './components/addCity'
import { AddCountry } from './components/addCountry'
import { EditCity } from './components/Edit'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={< AddCountry/>} />
        <Route path="/add-city" element={< AddCity/>} />
        <Route path="/add-city/:id" element={< EditCity/>} />
      </Routes>
    </div>
  )
}

export default App
