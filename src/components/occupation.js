
import React, {Component} from 'react';
import '../css/Biography.css'


class occupation extends Component {
    render(){
        return(
            <div>
               <div class="dot">
                <img src="../res/Dots.png" width="800px"/>
               </div>
              <img class="occ" src="/res/Rectangle10copy2.png"/>
              <div class="occupation">
                    <div class="container">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExamp leIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inn" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block img-fluid" src="../res/8A3A1419.png" alt="First slide"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>></h3>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="../res/8A3A1426.png" alt="Second slide"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>Dec. 2004 to Mar. 2005</h3>
                                        <p>Outreach intern (United Nations association of greater Boston</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block img-fluid" src="../res/8A3A1494.png" alt="Third slide"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
          </div>
         
        );
    }
}
export default occupation;