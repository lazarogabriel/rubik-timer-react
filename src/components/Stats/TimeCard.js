import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TimeCard extends React.Component{
    
    render( {CardColor, Time, Date } ) {
        return (
        <div className={`${CardColor} TimeCard d-flex justify-content-between p-3`}>
                <div>
                    <span>{Time}</span><br/>
                    <small className="pl-2">{Date}</small>
                </div>
                <div>
                    <button className="font-weight-bold btn btn-success btn-sm">SAVE</button>
                    <button className="font-weight-bold btn btn-danger btn-sm ">X</button>
                </div>
            </div>
        );
    } 
}