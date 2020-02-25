import React, { useState, useEffect } from 'react';
import './Services.scss';
//import {serviceMembers} from './Services.js';
import API from  '../../common/API.js';

import Service from './Service.jsx';

const ServiceMembers = () => {

//1. Set up State to keep track of data from server
const [serviceMembers, setServiceMembers] = useState([]);

//Only do this on mount
useEffect(() => {
        //2. Retrieve data from the server
    API.get('services/gallery').then((result) => {
        //3. Update staffMembers with data from server
        console.log('Service Server Response', result);
        setServiceMembers(result.data);
    });
}, [])


    return serviceMembers.map((serviceMember, idx) => {
        return (
            <Service key={ idx } serviceMember={ serviceMember } />
        );
    });
}

const Services = () => {
    return (
        <div className ='Service'>
            <h2>Services goes here.</h2>
            <div className="container">
                <ServiceMembers />
            </div>
        </div>
    )
}

export default Services;