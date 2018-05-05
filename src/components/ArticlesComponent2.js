import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Articles.css';

export default class ArticlesComponent2 extends Component{
    render(){
        const {img1} = this.props;
        const {img2} = this.props;
        const {img3} = this.props;
        const {HeadLine} = this.props;
        const {date} = this.props;
        const {paragraph} = this.props;
        return(
         <div >
             <div className ="row">
                     <div class ="col-lg-6">
                         
                         <h2 className = "headLine">{HeadLine}</h2>
                    
                         <p className ="date">{date}</p>
                         <br/>
                         <p className="paragraph2" >{paragraph} </p>
                         
                         <Link  to='/articlesDetails'> <button  className = 'button1'>More</button> </Link>  
                       </div> 
                   
                    
                         <div className ="col-lg-6" >
                         <div className="padding2">
                           <img className ="image4" src={img1} />
                           <img className ="image5"  src={img2}/>
                           <img className ="image6" src={img3} />
                         </div>
                         </div> 
                 </div>
         </div>
        );
    }
}
