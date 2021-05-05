import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg='light' fixed='top'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='m-2'>
          <Nav.Item className='mr-3'>
            <NavLink to='/' href='/'>
              На главную
            </NavLink>
          </Nav.Item>

          <Nav.Item className='mr-3'>
            <NavLink to='/posts'>Посты</NavLink>
          </Nav.Item>

          <Nav.Item className='mr-3'>
            <NavLink to='/profile'>Профиль</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
