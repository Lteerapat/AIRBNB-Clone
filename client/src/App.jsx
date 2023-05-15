import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import UserContextProvider from './context/UserContext'
import ProfilePage from './pages/ProfilePage'
import PlacesPage from './pages/PlacesPage'
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage'
import BookingsPage from './pages/BookingsPage'
import BookingPage from './pages/BookingPage'

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

const App = () => {

    return (
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path= '/login' element={<LoginPage />} />
                    <Route path= '/register' element={<RegisterPage />} />
                    <Route path= "/account" element={<ProfilePage />} />
                    <Route path= "/account/places" element={<PlacesPage />} /> {/* dashboard */}
                    <Route path= "/account/places/new" element={<PlacesFormPage />} /> {/* add */}
                    <Route path= "/account/places/:id" element={<PlacesFormPage />} /> {/* edit */}
                    <Route path= "/place/:id" element={<PlacePage />} />
                    <Route path= "/account/bookings" element={<BookingsPage />} />
                    <Route path= "/account/bookings/:id" element={<BookingPage />} />
                </Route>
            </Routes>
        </UserContextProvider>
    )
}

export default App
