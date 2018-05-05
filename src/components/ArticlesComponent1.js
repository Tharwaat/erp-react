import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../css/Articles.css';

export default class ArticlesComponent1 extends Component{
    render(){
        const {img1} = this.props;
        const {img2} = this.props;
        const {img3} = this.props;
        const {HeadLine} = this.props;
        const {date} = this.props;
        const {paragraph} = this.props;
        return(
         <div>
             <div className ="row">
                     <div className ="col-lg-6" >
                         <div>
                           <img className ="image1" src={img1} />
                           <img className ="image2" src={img2} />
                           <img className ="image3" src={img3} />
                         </div>
                     </div>
                  
                     <div className ="col-lg-6" >
                         <div className ="padding">
                         <h2 className = "headLine">{HeadLine}</h2>
                       
                         <br/>
                         <p className = "date"> {date} </p>
                         
                         <p className="paragraph2" >{paragraph}</p>
                         <Link  to='/articlesDetails'> <button  className = 'button1'>More</button> </Link>  
                         
                       </div>   
                     </div> 
                  </div>
         </div>
        );
    }
}
