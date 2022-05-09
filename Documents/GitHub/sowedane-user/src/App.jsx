import './App.css'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import { SignIn } from './components/SignIn'
import { HomeNav } from './components/HomeNav'
import { MainHome } from './components/mainHome'
import { Home } from './components/Home'
import { SignUp } from './components/SignUP'
import { AdminSignIn } from "./components/AdminLogin"
import { UserInfo } from "./components/UserInfo"
import { EditInfo } from "./components/EditInfo"


function App() {

  return (
    <div className="App">
      <HomeNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/adminSignIn" element={<AdminSignIn />} />
        <Route path="/mainHome" element={<MainHome />} />
        <Route path="/userpage" element={<UserInfo />} />
        <Route path="/editpage" element={<EditInfo />} />
        {/* <Route path="/profile" element={<Profile/>}/> */}

      </Routes>
    </div>
  )
}

export default App
