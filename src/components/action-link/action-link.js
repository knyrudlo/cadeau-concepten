import React from 'react';
import './action-link.scss'

const ActionLink = (props) => {
    const actionLinkClass = 'action-link';

    return (
        <a href='/' 
            className={ `${actionLinkClass} 
                ${props.modifier ? actionLinkClass + '_' + props.modifier : ''} 
                ${props.disabled ? actionLinkClass + '_' + props.disabled : ''}
            `}>
            {props.children}
        </a>
    )
}

export default ActionLink;