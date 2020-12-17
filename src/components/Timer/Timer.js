import React, { useContext, useState, useRef } from "react";
import TimerTouchArea from "./TimerTouchArea";
import { Container } from "react-bootstrap";
import { StatsContext } from "../../Contexts/StatsContext";
import { getNextCardColor } from "../Stats/TimeCard";
import  "./Timer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
    
    const [timeCards, setTimeCard] = useContext(StatsContext);
    const timer = useRef(null);
    const start = useRef(0);
    const [time, setTime] = useState(millisecondsToTime(0));
    const [timeStyle, setTimeStyle] = useState('Stop');

    const startTimer = () => {
        setTimeStyle("Start");
        start.current = Date.now() - 0;

        timer.current = setInterval(() => {
            let milliseconds = Date.now() - start.current
            setTime(millisecondsToTime(milliseconds));
        }, 1);
    }

    const stopTimer = () => {
        setTimeCard(prevTimeCards => {
            const date = new Date().toDateString();
            let color = null;

            if (prevTimeCards.length > 0) {
                color = getNextCardColor(timeCards[timeCards.length - 1].Color);
            }

            return [...prevTimeCards, {
                Id: `${time}-${date}`,
                Time: time,
                Date: date,
                Color: color
            }];
        });

        setTimeStyle("Stop");
        clearInterval(timer.current)
    }

    return(
        <Container fluid className="Timer h-100 flex-column align-items-center text-light">
            <div className="text-center mt-5">
                <a href="/#" className="btnShowLogIn text-warning">Login</a>
                <h1 className="font-weight-bold text-center pb-5">
                    Rubik Timer
                </h1>
                <h2 className={`${timeStyle} font-weight-bold`}>
                    {time}
                </h2>
            </div>
            <TimerTouchArea start={startTimer} stop={stopTimer}/>
        </Container>
    );
}


const millisecondsToTime = (s) => {
    const pad = (n, z = 2) => ('00' + n).slice(-z);
    let minutes = pad((s % 3.6e6)/6e4|0);
    return `${minutes === '00' ? '' : minutes + ' : '}${pad((s % 6e4)/1000|0)}.${pad(s % 1000, 3)}`;
}

export default Timer;