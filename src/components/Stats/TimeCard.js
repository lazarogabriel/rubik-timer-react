import React from 'react';
import { Col } from 'react-bootstrap';
import './TimeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TimeCard = ({CardColor, Time, Date }) => {
    return (
        <Col md={6} xl={4}>
            <div className={`${CardColor} TimeCard d-flex p-3 justify-content-between`}>
                <div>
                    <span>{Time}</span>
                    <br/>
                    <small>{Date}</small>
                </div>
                <div>
                    <button className="font-weight-bold btn btn-success btn-sm mr-2">SAVE</button>
                    <button className="font-weight-bold btn btn-danger btn-sm ">X</button>
                </div>
            </div>
        </Col>
    );
} 

export default TimeCard;