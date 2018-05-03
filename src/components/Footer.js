import React,{Component} from 'react'
import '../css/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="foot">
                <div className ="footer">
                    <div className="botLogo">
                        <img src="../res/VectorSmartObject.png" alt='botlogo'/>
                    </div>
                    
                    <p className="text">GET IN TOUCH</p>

                    <div className="subscribe">
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-dark">Subscribe</button>
                                </span>                        
                            </div>
                        </form>               
                    </div>         
                
                    <div className="icons">
                        <div className="input-group">
                            <a><i className="fab fa-facebook fa-2x"></i></a>
                            <a><i className="fab fa-twitter fa-2x"></i></a>
                            <a><i className="fab fa-telegram-plane fa-2x"></i></a>
                        </div>
                    </div>               
                </div>
            </div>
        );
    }


}

export default Footer;