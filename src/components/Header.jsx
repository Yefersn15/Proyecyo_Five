import React from 'react';
import Menu from './Menu'

const Header = () => {
    return (
        <header className="bg-dark bg-gradient py-2 text-center shadow-sm">
            <div className="container">
                <h1 className="display-4 fw-bold text-info">⚡ ElectroStore</h1>
                <p className="lead text-light mt-2">
                    Innovación y tecnología al alcance de tu hogar
                </p>
            </div>
            <Menu />
        </header>
    );
};

export default Header;