import React from "react";
import './Slider.css';
import AngleUpSolid from './angle-up-solid.svg';
import Footer from './Footer';
import Stats from '../Stats/Stats';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Slider extends React.Component{
    render(){
        return(
            <div className="Slider d-flex flex-column text-dark">
                <div className="align-self-center text-center">
                    <img src={AngleUpSolid} className="pt-1" width="25" alt='Arrow Up' />
                    <h2>Tiempos</h2>
                </div>

                <Stats/>
                <Footer/>
            </div>
        );
    }
}