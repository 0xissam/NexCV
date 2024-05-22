import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import DashboardLayout from './Layout/dashboard/Layout';
import DashboardHome from './components/dashboard/Home';


function App() {
  const location = useLocation();
  return (
    <>

      {/* <Login/>
    <Singup/> */}
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<Aboutus />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='contact' element={<Contact />}/>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Signup />} />
        </Route>
          <Route path='/dashboard' element={<DashboardLayout />} >
            <Route index element={<DashboardHome />} />
          </Route>
      </Routes>

    </>
  )
}

export default App
