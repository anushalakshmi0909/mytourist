import {React} from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>My Application</h1>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href='/places'>Tourist Places</a></li>
            <li><a href='/plans'>Plans</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        </nav>
    );
    }