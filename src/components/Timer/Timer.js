import React from "react";
import  "./Timer.css";
import TimerTouchArea from "./TimerTouchArea";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Timer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          time: this.millisecondsToTime(0),
          start: 0,
          timeStyle: 'Stop'
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }

    startTimer() {
        this.setState({ timeStyle: "Start" });
        this.setState({ start: Date.now() - 0 })
        this.timer = setInterval(() => {
            let milliseconds = Date.now() - this.state.start
            this.setState({ time: this.millisecondsToTime(milliseconds) });
        }, 1);
    }

    stopTimer() {
        this.setState({ timeStyle: "Stop" });
        clearInterval(this.timer)
    }

    millisecondsToTime(s) {
      const pad = (n, z = 2) => ('00' + n).slice(-z);
      let minutes = pad((s % 3.6e6)/6e4|0);
      return `${minutes === '00' ? '' : minutes + ' : '}${pad((s % 6e4)/1000|0)}.${pad(s % 1000, 3)}`;
    }

    render(){
        const {timeStyle, time} = this.state;
        return(
            <Container fluid className="Timer h-100 flex-column align-items-center text-light">
                <div className="text-center mt-5">
                    <a href="/#" className="btnShowLogIn text-warning">Login</a>
                    <h1 className="text-center pb-5">
                        Rubik Timer
                    </h1>
                    <h2 className={timeStyle}>
                        {time}
                    </h2>
                </div>
                <TimerTouchArea start={this.startTimer} stop={this.stopTimer}/>
            </Container>
        );
    }
}

export default Timer;