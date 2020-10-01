import React from 'react';
import './Contact.css';
import IconAnonymous from './svg-icons/IconAnonymous';
import IconMale from './svg-icons/IconMale';
import IconFemale from './svg-icons/IconFemale';

const drawGender = (gender) => {
    if(gender === 'male'){
        return <IconMale className = "contact__gender"/>  
    } else if(gender === 'female'){
        return <IconFemale className = "contact__gender"/>
    } else {
        return <IconAnonymous className = "contact__gender"/>
    }
}

export default function Contact(props){
    const contactAvatar = (props.avatar) ? <img src = {props.avatar} alt = "user avatar" className ="contact__avatar-img" /> : <span className ="contact__init">{props.firstName.slice(0, 1) + props.lastName.slice(0, 1)}</span>; 

    return (
        <li className = "contact">
            <div className = "contact__avatar contact__avatar_mini">
                {contactAvatar}
            </div>
            <div className = "contact__info">
                <h3 className ="contact__name">{props.firstName} {props.lastName}</h3>
                <p className = "contact__phone">{props.phone}</p>                
            </div>
            {drawGender(props.gender)}    
        </li>

    )
}