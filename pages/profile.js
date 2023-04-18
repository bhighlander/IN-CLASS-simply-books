import React from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <User userObject={user} />
    </>
  );
}
