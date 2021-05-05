import React from 'react';
import { Card } from 'react-bootstrap';

interface Props {
  id: string;
  title: string;
  body: string;
}

const Post: React.FC<Props> = ({ id, title, body }) => {
  return (
    <Card style={{ width: '100%' }} className='mb-2'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted'>by User {id}</Card.Footer>
    </Card>
  );
};

export default Post;
