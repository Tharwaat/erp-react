import React, {Component} from 'react';
import '../css/Biography.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class EarlyLife extends Component {
   render(){
     const {img} = this.props;
     const paragraphs = this.props.paragraphs.map((parag , index)=>
     (
      <ul key ={index}>
          <br/>
           {parag}
         <br/>
      </ul>
      
     )
     
     );
       return(
       <div>
        <section className="first">
                <div className="container">
                    
                    <div className="earlylife">                     
                        <div className="ellipse">
                            <img src={img} width="200px"/>
                        </div>
                            <div className="paragraph">
                                  <img src="../res/Rectangle10.png"/>
                                   <p>
                                  {paragraphs}
                                      </p>       
                        </div>
                     
                    </div>
                </div>           
            </section>
     </div>
       );
   }

}

export default EarlyLife;
class Education extends Component {
    
}