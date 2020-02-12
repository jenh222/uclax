import React from 'react';
import './Services.scss';
import {serviceMembers} from './Services.js';

const ServiceMembers = () => {
    return serviceMembers.map((serviceMember, idx) => {
        return (
            <div key={idx} className = {'ServiceMember'}>
                <img src= {serviceMember.img} alt={serviceMember.name} />
                <h3>{ serviceMember.name }</h3>
            </div>
        );
    });
}

const Service = () => {
    return (
        <div className ='Service'>
            <h2>Services goes here.</h2>
            <div className="container">
            <ServiceMembers />
        </div>
        </div>
    )
}

export default Service;