/**
 * Fetches user data from a dummy API and renders a `UserProfile` component with the fetched data.
 *
 * This component is responsible for handling the data fetching and rendering the user profile.
 */
import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

function UserProfileContainer() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetching data from the dummy API
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return user ? <UserProfile user={user} /> : <div>Loading...</div>;
}

export default UserProfileContainer;
