import React, {Component} from 'react';
import '../css/md2.css';

export default class md2 extends Component{
    render(){
        return(
            <div>
                
                <div className ="div1" >
                    <img src = "../res/main.png" alt='mediatraining'/>
                </div>

                <div class = "div7">
                        <p class ="p15">For Actors, Music Artists <br/>and Other Public Figures</p>
                        <p class = "p16">It develops the skills necessary to shape and deliver powerful and engaging presentations<br/>to customers, donors, internal corporate teams, and other audiences. For clients who<br/>present via video or webinars, we also teach them how to work with the camera<br/>effectively and naturally.</p>
                </div>
                
                <div class ="div8">
                    <p class = "p17">We prepare talent for their journey into the spotlight, including red carpet interviews,<br/>press junkets, record launches, feature interviews and other public events.<br/><br/>
                            Media interviews can be especially challenging for actors, music artists and other<br/>celebrities and public figures because people often feel they have a right to know about<br/>the personal lives of anyone in the public eye. Celebrities and performers may be tempted<br/>to share too much, but there’s a fine line between letting fans get to know who they are<br/>and maintaining some healthy boundaries around one’s personal life. We help each client<br/>decide what his or her boundaries will be before they face the media.<br/><br/>

                            Sometimes artists and performers forget that a comment that’s tossed off candidly in an<br/>interview or in a tweet may be seen as a stronger statement by the media or the public.<br/>Our training prepares clients to confidently navigate interviews and public presentations,<br/>allowing their own individual personalities to shine through.<br/><br/>
                            We have trained clients represented by Universal Music, 300 Entertainment, Disney,<br/> Nickelodeon, and other top entertainment studios. </p>
                    <button class="b10">Register Now</button>
                </div>

            </div>
        );
    }
}