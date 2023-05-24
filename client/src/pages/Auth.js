import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация': 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваш пароль..."
                    />
                    <Row className="d-flex justify-content-between mt-3 px-2">
                        {
                            isLogin ?
                                <div style={{width: 350}}>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                                </div>
                                :
                                <div style={{width: 350}}>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                                </div>
                        }
                        <Button className={"align-self-end"} style={{width: 150}} variant={"outline-success"}>
                            { isLogin ? 'Войти': 'Регистрация' }
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;