import React from 'react';
import { Card } from 'react-bootstrap';

interface Props {
  title: string;
  url: string;
}

const PictureCard: React.FC<Props> = ({ title, url }) => {
  return (
    <Card style={{ width: '18rem' }} className='mb-3'>
      <Card.Img variant='top' src={url} />
      <Card.Body>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PictureCard;
