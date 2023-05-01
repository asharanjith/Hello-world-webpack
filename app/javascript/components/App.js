import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greetings from './Greetings';
import {fetchGreeting} from '../redux/greetingSlice';

const App = () => {
    const dispatch = useDispatch();
    dispatch(fetchGreeting());
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Greetings />} />
        </Routes>
        </Router>
    );
    }

export default App;