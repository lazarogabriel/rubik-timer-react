import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div className="p-3 mt-auto">
            <div className="text-center text-secondary">
                <span >&copy; 2019 Todos los derechos reservados 
                    <br/>
                    Hecho por 
                    <a href="http://www.lazzaro.website/" target="_blank" rel="noreferrer">
                        Lazzaro
                    </a>
                </span>       
            </div>
        </div>
    );
}

export default Footer;
