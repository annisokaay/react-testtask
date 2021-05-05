import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner animation='border' role='status' style={{ margin: '0 auto' }}>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
