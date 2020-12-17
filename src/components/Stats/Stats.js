import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TimeCard from './TimeCard';
import './Stats.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Stats = () => {
    return (
        <Container className="Stats mt-3">
            <Row className="mx-auto">
                <TimeCard CardColor='Red' Time='21.331' Date={new Date().toDateString()}/>
                <TimeCard CardColor='Yellow' Time='4.131' Date={new Date().toDateString()}/>
                <TimeCard CardColor='Blue' Time='46.786' Date={new Date().toDateString()}/>
                <TimeCard CardColor='Green' Time='15.541' Date={new Date().toDateString()}/>
                <TimeCard CardColor='White' Time='10.181' Date={new Date().toDateString()}/>
                <TimeCard CardColor='Orange' Time='19.181' Date={new Date().toDateString()}/>
            </Row>
        </Container>
    );  
}

export default Stats;