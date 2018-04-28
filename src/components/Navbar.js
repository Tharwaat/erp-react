import React, {Component} from 'react';
import '../css/Navbar.css';

export default class Navbar extends Component{
    
    render(){
        const {img, dots} = this.props;
        
        console.log(this.props.img);
        return(            
            <nav className="nav">
                <img className="logo" src={img} alt="logo"/>
                <ul className="navlist">
                    <li><a href="" > <p>Media Training</p> </a></li>
                    <li><a href="" > <p>Photos</p> </a></li>
                    <li><a href="" > <p>Events</p> </a></li>
                    <li><a href="" > <p>Public Speaking</p> </a></li>
                    <li><a href="" > <p>TV Shows</p> </a></li>
                    <li><a href="" > <p>Guests</p> </a></li>
                    <li><a href="" > <p>Videos</p> </a></li>
                    <li><a href="" > <p>Biography</p> </a></li>
                    <li><a href="" > <p>Hello!</p> </a></li>
                </ul>
                <img className="dots" src={dots} alt="dots"/>
            </nav>
        );
    }
}