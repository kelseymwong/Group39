import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Login} from './components/login';
import { Register } from './components/register';
import { ProfileForm } from './components/profileForm';
import { Navbar } from './components/navBar';
import { EventManagementForm } from './components/eventSearch';
import { Welcome} from './components/welcome';
import {ResetLogin} from './components/forgotPassword';
import {VolunteerMatchingForm} from './components/volunteerMatchingForm'
import UserDashboard from './components/userDashboard';
import EventsCatalog from './components/eventsCatalog';
import { VolunteerHistory } from './components/volunteerHistory';
import { VolunteerHistoryAdmin} from './components/volunteerHistoryAdmin';
export const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" Component={Welcome}/>
            <Route path="/login" Component={Login}/>
            <Route path="/reset" Component={ResetLogin}/>
            <Route path="/register" Component={Register}/>
            <Route path = "/profileForm" Component = {ProfileForm}/>
            <Route path = "/eventManagement" Component = {EventManagementForm}/>
            <Route path="/volunteerMatchingForm" Component={VolunteerMatchingForm}/>
            <Route path="/userDashboard" Component={UserDashboard}/>
            <Route path="/events" Component={EventsCatalog}/>
            <Route path = "/volunteerHistory" Component = {VolunteerHistory}/>
            <Route path = "/volunteerHistoryAdmin" Component = {VolunteerHistoryAdmin}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;