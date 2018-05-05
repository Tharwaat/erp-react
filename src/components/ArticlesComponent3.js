import React, {Component} from 'react';

import '../css/Articles.css';

export default class ArticlesComponent3 extends Component{
    render(){
        const {img1} = this.props;
        const {img2} = this.props;
        const {img3} = this.props;
        const {HeadLine} = this.props;
        const {date} = this.props;
        const {paragraph} = this.props;
        return(
         <div>
            <section>
             <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <div class = "row" >
            <div class="col-lg-3">
            <img className="imgg" src="../res/PIC3Untitled-2.jpg" alt="First slide"/>
             <h2 class = "headLine2" > Innovtive Young Arabs</h2>
               <br/>
              <p class ="date" >11/9/2017</p>
            </div>
            <div class="col-lg-3">
            <img className="imgg" src="../res/PIC3Untitled-2.jpg" alt="First slide"/>
             <h2 class = "headLine2" > Innovtive Young Arabs</h2>
               <br/>
              <p class ="date" >11/9/2017</p>
            </div>
            <div class="col-lg-3">
            
            <img className="imgg"src="../res/PIC3Untitled-2.jpg" alt="First slide"/>
             <h2 class = "headLine2" > Innovtive Young Arabs</h2>
               <br/>
              <p class ="date" >11/9/2017</p>
            </div>
             <div class="col-lg-3">
            <img className="imgg" src="../res/PIC3Untitled-2.jpg" alt="First slide"/>
             <h2 class = "headLine2" > Innovtive Young Arabs</h2>
               <br/>
              <p class ="date" >11/9/2017</p>
            </div>
            </div>
            
            
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
</div>
         </section>
         </div>
        );
    }
}
