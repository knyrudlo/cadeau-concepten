import React from "react";

import './navigation.scss';

const Navigation = ({open}) => {
    return (
        <nav className={`navigation ${open ? 'navigation_mobile': ''}`}>
            <a href='/' className='navigation__item'>Zakelijk</a>
            <a href='/' className='navigation__item'>Saldo check</a>
        </nav>
    )
}

export default Navigation;