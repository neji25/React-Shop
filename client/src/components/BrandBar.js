import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-inline-flex'>
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    className="p-3"
                    style={{width: "auto", cursor: "pointer"}}
                    border={brand["id"] === device.selectedBrand["id"] ? "danger" : "light"}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;