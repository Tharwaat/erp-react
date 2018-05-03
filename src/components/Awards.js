import React, {Component} from 'react';
import '../css/Biography.css'


class Awards extends Component {
   render(){
       const AwardSection = this.props.AwardSection.map((anObjectMapped, index) => {
    return (
       <div >
            <img src={anObjectMapped.MainImg} width="500px"/>
            <img class="ho2" src={anObjectMapped.SecondImg}/>
            <p>{anObjectMapped.paragraph}</p>
            </div>
    );
})

       return(
         <div>
            <section class="fourth">          

            <div class="awards">
                <img src="../res/Rectangle10copy3.png" width="500px"/>
            </div>

            <div class="honors">
                {AwardSection}                
                   
            </div>
            
           
         </section>
         </div>  
       );
   }

}

export default Awards;


