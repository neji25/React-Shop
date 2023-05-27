import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import phone from "../assets/phone.png";
import bgStar from "../assets/bagStar.png"


const DevicePage = () => {
    const device = {id: 1, name: "Iphone 12 pro", price: 25000, raiting: 5, img: phone}
    const description = [
        {id: 1, title: "Оперативная память", description: '5 гб'},
        {id: 2, title: "Камера", description: '12 Мп'},
        {id: 3, title: "Процессор", description: 'Пентиум 3'},
        {id: 4, title: "Кол-во ядер", description: '2'},
        {id: 5, title: "Аккумулятор", description: '4000'},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{background: `url(${bgStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: "cover", fontSize: 64}}
                        >
                            {device.raiting}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в каризну</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? '#F3F3F3' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;