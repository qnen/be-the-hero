import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Logon />} />
                <Route path="/register" element={<Register />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/incidents/new" element={<NewIncident />} />
            </Switch>
        </BrowserRouter>
    );
}