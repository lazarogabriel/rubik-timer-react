import React from 'react';
import Timer from '../Timer/Timer';
import Slider from '../Slider/Slider';
import { Themes, ThemesProvider } from '../Context/ThemeContext';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.setTheme = theme =>{
      this.setState({ theme: theme });
    } 

    this.state = {
      theme: Themes.default,
      setTheme: this.setTheme  
    }
  }


  render() {
    return (
      <ThemesProvider value={this.state}>
        <div className={`App ${this.state.theme}`}>
          <Timer />
          <Slider/>
        </div>
      </ThemesProvider>
    );
  }
}

export default App;
