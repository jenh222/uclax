
import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';


const Service = (props) => {

    const [showLightBox, setShowLightBox] = useState('false');

    const turnLightOn = () => {
        console.log('Turning On');
        setShowLightBox('true');
    }
    const turnLightOff = () => {
        console.log('Turning Off');
        setShowLightBox('false');
    }
    

    return (
        <div className = 'Service'>
            <img 
            onClick={ turnLightOn }
            src= {props.serviceMember.image} 
            alt={props.serviceMember.name} 
            />
            <h3>{ props.serviceMember.title }</h3>
            <Lightbox 
            show={showLightBox} 
            turnLightOff={turnLightOff}
            imageURL={props.serviceMember.image}
            imageAlt={props.serviceMember.title}
             />
        </div>
    );
}

export default Service;