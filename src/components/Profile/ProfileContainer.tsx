import React, { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { asyncGetProfile } from '../../store/reducers/profile-reducer';
import Loader from '../Loader';

const ProfileContainer = (props: any) => {
  const { isFetching, profile, getProfile, isAuth } = props;

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  if (!isAuth) {
    return <Redirect to='/login' />;
  }

  if (!profile) return <div>Error</div>;

  return (
    <>
      {!isFetching ? (
        <Card style={{ width: '36rem', margin: '0 auto' }}>
          <Card.Header>My profile</Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item>Name: {profile.name} </ListGroup.Item>
            <ListGroup.Item>Username: {profile.username}</ListGroup.Item>
            <ListGroup.Item>Email: {profile.email}</ListGroup.Item>
            <ListGroup.Item>Phone: {profile.phone}</ListGroup.Item>
            <ListGroup.Item>Website: {profile.website}</ListGroup.Item>
          </ListGroup>
        </Card>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default connect(
  (state: any) => ({
    isFetching: state.profile.isFetching,
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
  }),
  (dispatch: any) => ({
    getProfile: () => {
      dispatch(asyncGetProfile());
    },
  })
)(ProfileContainer);
