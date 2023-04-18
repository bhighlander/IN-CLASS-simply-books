import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

function AuthorCard({ authorObject, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObject.first_name} ${authorObject.last_name}?`)) {
      deleteSingleAuthor(authorObject.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{authorObject.first_name} {authorObject.last_name}</Card.Title>
        <p className="card-text bold">{authorObject.favorite && <span>Favorite<br /></span> }</p>
        <Link href={`/author/${authorObject.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/author/edit/${authorObject.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObject: PropTypes.shape({
    image: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),

  onUpdate: PropTypes.func.isRequired,
};

AuthorCard.defaultProps = {
  authorObject: {
    image: 'Image',
    first_name: 'First Name',
    last_name: 'Last Name',
    favorite: false,
    firebaseKey: 'Firebase Key',
  },
};

export default AuthorCard;
