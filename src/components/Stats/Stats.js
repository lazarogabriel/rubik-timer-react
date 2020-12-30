import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { TimeCard } from './TimeCard';
import { StatsContext } from '../../Contexts/StatsContext';
import RubikCubeGif from './solving-cube.gif';
import './Stats.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Stats = () => {
    const { timeCards, deleteTimeCard, saveTimeCard } = useContext(StatsContext);
    return (
        <Container className="Stats mt-3">
            <Row className="mx-auto">
                {
                    timeCards.length === 0 &&
                    <div className="col text-center py-5 my-5">
                        <img src={RubikCubeGif} alt='cube'/>
                        <h5>Nada por aca, resolve tu cubo iniciando el timer...</h5>
                    </div>
                }

                {timeCards.map(card => 
                    <TimeCard key={card.Id} 
                              Date={card.Date}
                              Time={card.Time} 
                              Color={card.Color}
                              clickToDeleteCard={() => deleteTimeCard(card.Id)} 
                              clickToSaveCard={() => saveTimeCard(card.Id)} />
                )}
            </Row>
        </Container>
    );  
}

export default Stats;