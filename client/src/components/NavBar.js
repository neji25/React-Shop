import React, { useContext } from 'react'
import { Context } from '../index'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {Button} from 'react-bootstrap'


export default function NavBar() {
    const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      {user.isAuth ?
        <Container>
          <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
          <Nav className="ml-auto" style={{ color: 'white' }}>
          <Button variant='outline-light'>Админ-панель</Button>
            <Button variant='outline-light'>Выйти</Button>
          </Nav>
        </Container>
        :
        <Container>
          <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
          <Nav className="ml-auto" style={{ color: 'white' }}>
          <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        </Container>
      }
        
    </Navbar>
  )
}

