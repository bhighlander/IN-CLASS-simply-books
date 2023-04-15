import React from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <User image={user.photoURL} name={user.displayName} email={user.email} lastLogin={user.metadata.lastSignInTime} />
      <button type="button">Signout</button>
    </>
  );
}
