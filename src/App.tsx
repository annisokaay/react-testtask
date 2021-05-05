import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PicturesContainer from './components/Pictures/PicturesContainer';
import PostsContainer from './components/Posts/PostsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Container>
      <Header />
      <Row className='my-container'>
        <Switch>
          <Route exact path='/' component={PicturesContainer} />
          <Route exact path='/posts' component={PostsContainer} />
          <Route exact path='/profile' component={ProfileContainer} />
          <Route exact path='/login' component={LoginPage} />
        </Switch>
      </Row>
    </Container>
  );
};
export default App;
