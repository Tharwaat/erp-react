import React,{Component} from 'react'
import '../css/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component{
    render(){
        return(
            <div>
            <div class ="footer">
                <div class="botLogo">
                    <img src="../res/VectorSmartObject.png"/>
                </div>
                
                <p class="text">GET IN TOUCH</p>

                <div class="subscribe">
                    <form>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Your Email"/>
                            <span class="input-group-btn">
                                <button class="btn btn-dark">Subscribe</button>
                            </span>                        
                        </div>
                    </form>               
                </div>         
            
                <div class="icons">
                    <div class="input-group">
                        <a><i class="fab fa-facebook fa-2x"></i></a>
                        <a><i class="fab fa-twitter fa-2x"></i></a>
                        <a><i class="fab fa-telegram-plane fa-2x"></i></a>
                    </div>
                </div>               
            </div>
            </div>
        );
    }


}

export default Footer;