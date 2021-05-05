import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { asyncGetPictures } from '../../store/reducers/pictures-reducer';
import Loader from '../Loader';
import PictureCard from './PictureCard';

const PicturesContainer = (props: any) => {
  const { isFetching, pictures, getPictures } = props;

  useEffect(() => {
    getPictures();
  }, [getPictures]);

  if (!pictures) return <div>Error</div>;

  return (
    <>
      {!isFetching ? (
        pictures.map((picture: any) => {
          return (
            <Col key={picture.id}>
              <PictureCard title={picture.title} url={picture.url} />
            </Col>
          );
        })
      ) : (
        <Loader />
      )}
    </>
  );
};

export default connect(
  (state: any) => ({
    isFetching: state.pictures.isFetching,
    pictures: state.pictures.pictures,
  }),
  (dispatch: any) => ({
    getPictures: () => {
      dispatch(asyncGetPictures());
    },
  })
)(PicturesContainer);
