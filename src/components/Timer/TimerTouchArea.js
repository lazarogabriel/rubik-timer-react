import React from 'react';
import FingerPrint from "./fingerprint-solid.svg";
import { ThemesContext, Themes } from '../Context/ThemeContext';

class TimerTouchArea extends React.Component {
    static contextType = ThemesContext

    constructor(props){
        super(props);

        this.state = {
            isStarted: false,
            canStart: false,
            setCanStartTimeout: null
        };
    }

    onPress = () => {
        if (this.state.isStarted) {
            this.setState({ isStarted: false });
            this.context.setTheme(Themes.default);
            return this.props.stop();
        }
        
        this.context.setTheme(Themes.try);

        this.setState({ 
            setCanStartTimeout: setTimeout(() => {
                this.setState({ canStart: true })
                this.context.setTheme(Themes.ready);
            }, 1000)
        });
    }

    onPressEnd = () => {
        if (this.state.canStart) {
            this.setState({ isStarted: true });
            this.setState({ canStart: false }); 
            this.props.start();
            this.context.setTheme(Themes.started);
        }else{
            this.context.setTheme(Themes.default);
        }
        
        clearTimeout(this.state.setCanStartTimeout);
        this.setState({ setCanStartTimeout: null });
    }

    render (){
        return (
            <div className="FingerContainer">
                <div className="Circle"></div>
                <div className="Circle2"></div>
                <div className="Finger"
                    onTouchStart={this.onPress}
                    onTouchEnd={this.onPressEnd}
                    onMouseDown={this.onPress}
                    onMouseUp={this.onPressEnd} > 
                    <img className="FingerPrint" src={FingerPrint} alt='Finger Print'/>
                </div>
            </div>
        );
    }
}


export default TimerTouchArea;
