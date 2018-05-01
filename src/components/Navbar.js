import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

export default class Navbar extends Component{
    
    render(){
        const {img, dots} = this.props;
        
        console.log(this.props.img);
        return(            
            <nav className="nav">
                <img className="logo" src={img} alt="logo"/>
                <ul className="navlist">
                    <li> <Link className="navitem" to='/contact'> Contact us</Link> </li>
                    <li> <Link className="navitem" to='/media'> Media Training</Link> </li>
                    <li> <Link className="navitem" to='/photos'> Photos</Link> </li>
                    <li> <Link className="navitem" to='/events'> Events</Link> </li>
                    <li> <Link className="navitem" to='/public_speaking'> Public Speaking</Link> </li>
                    <li> <Link className="navitem" to='/tv'> TV Shows</Link> </li>
                    <li> <Link className="navitem" to='/guests'> Guests</Link> </li>
                    <li> <Link className="navitem" to='/videos'> Videos</Link> </li>
                    <li> <Link className="navitem" to='/biography'> Biography</Link> </li>
                    <li> <Link className="navitem" to='/'> Hello!</Link> </li>
                
                </ul>
                <img className="dots" src={dots} alt="dots"/>
            </nav>
        );
    }
}