import React from 'react';
import { Col } from 'react-bootstrap';
import './TimeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TimeCard = ({Color, Time, Date }) => {
    return (
        <Col md={6} xl={4}>
            <div className={`${Color} TimeCard d-flex p-3 justify-content-between`}>
                <div>
                    <span>{Time}</span>
                    <br/>
                    <small>{Date}</small>
                </div>
                <div>
                    <button className="CustomButton btn-success btn-sm mr-1">SAVE</button>
                    <button className="CustomButton btn-danger btn-sm">X</button>
                </div>
            </div>
        </Col>
    );
} 

export const CardColors = ['Yellow', 'Red', 'Blue', 'Orange', 'White', 'Green'];

export const getNextCardColor = (color) => 
    color === null ? CardColors[0]: 
    CardColors[CardColors.indexOf(color) + 1];


