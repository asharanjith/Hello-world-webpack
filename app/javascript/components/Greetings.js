import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
    const greeting = useSelector(state => state.greeting);
    return (
        <h1>{greeting.message}</h1>
    );
}

export default Greetings;