import React, {Component} from 'react';
import '../css/mt3.css'


class MediaTraining3 extends Component {
   render(){
     const {Header} = this.props;
     const {paragraph1} = this.props;
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
            <div class ="div1">
                <img class = "img1"src ="../res/img1 .png" />
                <img class = "img2" src ="../res/Layer 2.png"/> 
                 

            </div>
            
           <div class = "div2">
                    <p class ="p3">{Header}</p>
                    <p class = "p4">{paragraph1}</p>
            </div>
            
            <div class ="div3">
                <p class = "p6">{paragraphs}</p>
                <button class="b">Register Now</button>
            </div>
       </div> 
       );
   }

}

export default MediaTraining3;

