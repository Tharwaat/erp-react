import React, { Component } from 'react';
import '../css/TvShow.css';

export default class TvShow extends Component{
    render(){
        return(
            <div>

                <div className ="div1">
                <img className = "img1"src ="../res/tv.png" alt=".."/>
                </div>

                <div className = "div2">
                    <img className = "img2"src ="../res/Video.png" alt=".."/>
                </div>

                <div>
                    <div className = "left">
                        <img src ="../res/Changer.png" alt = "Video"/>
                    </div>
                    <div className = "right">
                        <img src ="../res/white.png" alt = "Video"/>
                    </div>
                </div>

                <div className ="div3">
                    <div className="lefttriangle">
                        <img src ="../res/white triangle.png" alt=".."/>
                    </div>
                    <div className="righttriangle">
                        <img src ="../res/moov triangle.png" alt=".."/>
                        <div className = "season">
                                <a src="" >Season one</a>
                                <a src="" >Season Two</a>
                                <a src="" >Season Three </a>
                        </div>
                    </div>

                    <div className = "allVideos">          
                        <div className="first">
                            <img src ="../res/left.png" alt = "Video"/>            
                        </div>
                        <div className = "third">
                            <img src ="../res/right.png" alt = "Video"/>
                        </div>
                        <div className = "second">
                            <img src ="../res/middle.png" alt = "Video"/>                
                        </div>            
                    </div>
                </div>

                <div className="lastdiv">
                    
                    <div className="part1">
                        <img src ="../res/woman2.png" alt=".."/>
                    </div>

                    <div className="part2">
                        <img src ="../res/woman1.png" alt=".."/>
                    </div>

                    <div className="part3">
                        <img src ="../res/man1.png" alt=".."/>
                    </div>
                    <div className="part4">
                        <img src ="../res/Emma.png" alt=".."/>
                            <div className="naming"><b>Emaa Stone</b></div>
                            <p className ="p">Emily Jean "Emma" Stone (born November 6, 1988) is an American actress. The highest-paid actress in the world, she has received such accolades as an Academy Award, a BAFTA Award, a Golden Globe Award, and three Screen Actors Guild Awards. Stone appeared in Forbes Celebrity 100 in 2013 and the Time 100 in 2017, and is often described by the media as one of the most talented actresses of her generation.</p>

                    </div>
                    <div className="part5">
                        <img src ="../res/woman3.png" alt=".."/>
                    </div>
                    <div className = "para">
                        <p className = "paragraph"><b>Important</b></p>
                        <p className = "paragraph2"><b>Guests</b></p>
                    </div>
                </div>

                <div className="banner">

                    <div className="part6">
                        <img src ="../res/man5.png" alt=".."/>
                    </div>

                    <div className="part7">
                        <img src ="../res/man3.png" alt=".."/>
                        <div className="naming"><b>Rose Lesile</b></div>
                        <div className = "Border">    _____   </div>
                        <div className="desc"><b>Movie Actor</b></div>
                    </div>

                    <div className="part8">
                        <img src ="../res/woman4.png" alt=".."/>
                        <div className="naming"><b>Rose Lesile</b></div>
                        <div className = "Border">    _____   </div>
                        <div className="desc"><b>Movie Actor</b></div>

                    </div>

                    <div className =  "part9">
                        <img src = "../res/man2.png" alt=".."/>
                        <div className="naming"><b>Rose Lesile</b></div>
                        <div className = "Border">    _____   </div>
                        <div className="desc"><b>Movie Actor</b></div>

                    </div>  

                    <div className="part10"/>
                        <img src ="../res/man4.png" alt=".."/>
                    </div>

            </div>

        );
    }
}