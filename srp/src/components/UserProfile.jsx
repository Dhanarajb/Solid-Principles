/**
 * Renders a user profile component with the user's name.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.user - The user object containing the user's name.
 * @returns {JSX.Element} - The rendered user profile component.
 */
// src/components/UserProfile/UserProfile.js
import React from 'react';

function UserProfile({ user }) {
    return <div>{user.name}</div>;
}

export default UserProfile;
