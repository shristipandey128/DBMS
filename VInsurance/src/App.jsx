import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Customer from './Components/customer'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import NewCustomer from './Components/NewCustomer'
import EditCustomer from './Components/EditCustomer'
import Start from './Components/Start'
import CustomerLogin from './Components/CustomerLogin'
import CustomerDetail from './Components/CustomerDetail'
import PrivateRoute from './Components/PrivateRoute'

function App() {
 
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/customer_login' element={<CustomerLogin />}></Route>
      <Route path='/customer_detail/:id' element={<CustomerDetail />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/customer' element={<Customer />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_customer' element={<NewCustomer />}></Route>
        <Route path='/dashboard/edit_customer/:id' element={<EditCustomer />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
