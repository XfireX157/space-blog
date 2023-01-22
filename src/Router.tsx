import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './Pages/Home/App'
import Default from './Pages/Default'
import Login from 'Pages/Login'
import Register from 'Pages/Register'
import User from 'Pages/User'

export default function RouterDom(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Default />} >
                    <Route index element={<App />} />
                    <Route path='/User' element={<User />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' index element={<Register />} />
                </Route>
            </Routes>
        </Router>
    )
}