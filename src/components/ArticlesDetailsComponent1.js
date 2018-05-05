import React, {Component} from 'react';

import '../css/ArticlesDetails.css';
import '../css/Articles.css';

export default class ArticlesDetailsComponent1 extends Component{
    render(){
        const {img1} = this.props;
        const {img2} = this.props;
        const {img3} = this.props;
        const {HeadLine} = this.props;
        const {date} = this.props;
        const {paragraph} = this.props;
        return(
         <div className="ArticlesDetails">
            <div class ="row" >
                      <div class ="col-lg-12">
                       <img className="img11" src={img1} />
                           <img className="img22" src={img2} />
                           <img className="img33" src={img3} />
                      </div>
                      
            </div>
            <div  class ="row" >
                <br/>
                <br/>
                       <h2 classNam="headLine">Innovtive Young Arabs</h2>
                       <br/>
                         <h3>{date}</h3>
                         <br/>
                         <p className="pp">
                             {paragraph}
                         </p>
                         <br/>
                                 <h2 class="headLine2">  Related Articles</h2>
                      </div>
         </div>
        );
    }
}
