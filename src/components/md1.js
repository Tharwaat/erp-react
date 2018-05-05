import React, {Component} from 'react';
import '../css/md1.css';

export default class md1 extends Component{
    render(){
        return(
            <div>
                <div className ="div1" >
                    <img src = "../res/main.png" alt='mediatraining'/>
                </div>

                <div className = "div4">
                        <p className ="p11">Media Training For Executives <br/>and Entrepreneurs</p>
                        <p className = "p12">Media Training Program for Executives and Entrepreneurs enable them to convey their<br/>message points with strength, clarity and well prepare them to talk infront of the camera.</p>
                </div>
                
                <div className ="div5">
                    <p className= "p13">Media training for executives and<br/>for entrepreneurs focuses on</p>
                    <p className = "p14">communicating key message points to address typical questions and challenging questions;<br/><br/>matching your personal delivery style to your company’s brand;<br/><br/>
                        handling adversarial interviewers;<br/>crisis communication;<br/>maintaining freshness in frequently repeated responses;<br/><br/>working with various camera set-ups and interview situations;<br/>and more.<br/><br/>We customize each session, based on the client’s needs and goals. </p>
                    <button className="b10">Register Now</button>
                </div>
            </div>
        );
    }
}