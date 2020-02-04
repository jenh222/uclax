import React from 'react';
import './Services.scss';
import {staffMembers} from './Services.js';

const StaffMembers = () => {
    return staffMembers.map((staffMember, idx) => {
        return (
            <div key={idx} className = {'StaffMember'}>
                <img src= {staffMember.img} alt={staffMember.name} />
                <h3>{ staffMember.name }</h3>
            </div>
        );
    });
}

const Staff = () => {
    return (
        <div className ='Staff'>
            <h2>Staff goes here.</h2>
            <StaffMembers />
        </div>
    )
}

export default Staff;