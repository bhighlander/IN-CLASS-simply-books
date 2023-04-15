import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
// import { useAuth } from '../utils/context/authContext';

export default function User({
  photoURL, displayName, email, lastSignInTime,
}) {
  return (
    <div className="user">
      {photoURL && <Image src={photoURL} alt={displayName} />}
      <div className="user-info">
        <h2>{displayName}</h2>
        <p>{email}</p>
        <p>Last Login: {lastSignInTime}</p>
      </div>
    </div>
  );
}

User.propTypes = {
  photoURL: PropTypes.string,
  displayName: PropTypes.string,
  email: PropTypes.string,
  lastSignInTime: PropTypes.string,
};

User.defaultProps = {
  photoURL: '',
  displayName: '',
  email: '',
  lastSignInTime: '',
};
