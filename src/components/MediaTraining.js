import React, {Component} from 'react';
import '../css/MediaTraining.css';
import {Link} from 'react-router-dom';

export default class MediaTraining extends Component{
    render(){
        return(
            <div>

                <div className ="div1">
                    <img src = "../res/main.png" alt='mediatraining'/>
                    <button className="b">Send Request</button>
                </div>

                <div className = "div2">
                    <div className="div2L">
                        <p className ="p4">For Executives and<br/>Entrepreneurs</p>
                        <p className = "p5">Media Training Program for Executives and<br/>Entrepreneurs enable them to convey with their<br/>
                        message point with strength, clarity and well<br/>prepare them to talk infornt of the camera.
                        <Link  to='/md1'> <button className="b2">More</button> </Link>  
                        </p>
                    </div>
                    <div className ="div2R">
                        <p className ="p3">For Actors, Music Artists <br/>and Other Public Figures</p>
                        <p className = "p6">Media Training Program for Executives and<br/>Entrepreneurs enable them to convey with their<br/>
                        message point with strength, clarity and well<br/>prepare them to talk infornt of the camera.
                        </p> 
                        <Link  to='/md2'> <button className="b3">More</button> </Link>
                    </div>
                </div>
                
                <div className ="div3">
                    
                    <p className = "p7">Videos</p>
                    <img src ="../res/left.png" alt = "Video" className= "v1"/>
                    <img src ="../res/right.png" alt = "Video" className= "v2"/>
                    <img src ="../res/middle.png" alt = "Video" className= "v3"/>

                </div>             

            </div>
        );
    }
}