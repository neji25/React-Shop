import React, { useContext } from 'react'
import { Context } from '../index'
import {observer} from 'mobx-react-lite'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">

        <Container>
            <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE)}>Админ-панель</Button>
                <Button variant='outline-light' className='mx-2' onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
            </Nav>
            :
              <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
              </Nav>
          }
        </Container>
        
    </Navbar>
  )
})

export default NavBar

