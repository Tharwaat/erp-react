import React,{Component} from 'react'
import '../css/Events.css';

export default class events extends Component{
    render(){
        return(
            <div>
                
                <div id="h1">
                    <img alt="object" src="../res/Vector Smart Object copy 2.png"/>
                </div>

                <div id="h2">
                    <img alt="head" src="../res/Vector Smart Object2.png"/>
                    <h4>Join Jessy El Murr at</h4>
                    <h2>
                        <b>SOCIAL MEDIA WEEK<br/>DUBAI</b>
                    </h2>
                    <h6>Arab youth: Innovation through social media</h6>
                    <h1>
                        DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VENUE:<br/> <br/>
                        <br/> <br/> TICKET INFO:
                    </h1>
                    <p>
                        2nd March 2017&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Kilachand Studio, Ductac, <br/>01:00 pm
                        - 01:45 pm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Mall of the emirates<br/>
                        <br/> <br/> <br/> <br/>Contact Ductac box office<br/>043414777
                    </p>                    
                </div>

                <div id="otherevents">
                    <h1>Other</h1>
                    <h1 id="u">
                        <br/> <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
                    </h1>
                    <h1 id="e">events</h1>
                </div>

                <div className="container" id="caro">
                    <div className="row" id="row">
                        <div className="col-xs-12">
                            <div id="imagecarousel" className="carousel slide" data-ride="carousel"
                                data-wrap="true" data-interval="false">
                                <ol className="carousel-indicators">
                                    <li data-target="#imagecarousel" data-slide-to="0" className="active"/>
                                    <li data-target="#imagecarousel" data-slide-to="1"/>
                                    <li data-target="#imagecarousel" data-slide-to="2"/>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="row">
                                            <div className="col-xs-4">
                                                <img alt="0" src="../res/11.png"/>
                                                <div className="carousel-caption">
                                                    <h3>Innovative Young<br/>Arabs</h3>
                                                </div>
                                            </div>
                                            <div className="col-xs-4">
                                                <img alt="1" src="../res/22.png"/>
                                                <div className="carousel-caption">
                                                    <h3>Innovative Young<br/>Arabs</h3>
                                                </div>
                                            </div>
                                            <div className="col-xs-4">
                                                <img alt="2" src="../res/33.png"/>
                                                <div className="carousel-caption">
                                                    <h3>Innovative Young<br/>Arabs</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

						        </div>
					        </div>
					
                            <a id="leftg" className="left carousel-control" href="#carousel"
                                role="button" data-slide="prev"> <span
                                className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a> <a id="rightg" className="right carousel-control" href="#carousel"
                                role="button" data-slide="next"> <span
                                className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        	
                        </div>
                    </div>
                </div>
                <div className="botAct">
                    <div id="Act">
                        <img alt="Rectangle" src="../res/Rectangle 1 copy.png"/>
                        <h1><u>Activi</u>ties</h1>			
                    </div>

                    <div className="container" id="actCarousel">
                        <div className="row" id="row">
                            <div className="col-xs-12">
                                <div id="imagecarousel" className="carousel slide" data-ride="carousel"
                                    data-wrap="true" data-interval="false">
                                    <ol className="carousel-indicators">
                                        <li data-target="#imagecarousel" data-slide-to="0" className="active"/>
                                        <li data-target="#imagecarousel" data-slide-to="1"/>
                                        <li data-target="#imagecarousel" data-slide-to="2"/>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <div className="row">
                                                <div className="col-xs-3">
                                                    <img alt="0" src="../res/111.png"/>
                                                    
                                                </div>
                                                <div className="col-xs-3">
                                                    <img alt="1" src="../res/111.png"/>
                                                    
                                                </div>
                                                <div className="col-xs-3">
                                                    <img alt="2" src="../res/111.png"/>
                                                    
                                                </div>
                                                <div className="col-xs-3">
                                                    <img alt="3" src="../res/111.png"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}