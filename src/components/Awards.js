import React, {Component} from 'react';
import '../css/Biography.css'


class Awards extends Component {
   render(){
       const AwardSection = this.props.AwardSection.map((anObjectMapped, index) => {
    return (
       <div className ={anObjectMapped.ClassName1}>
            <img src={anObjectMapped.MainImg} width="500px"/>
            <img className={anObjectMapped.ClassName2} src={anObjectMapped.SecondImg}/>
            <p>{anObjectMapped.paragraph}</p>
      </div>
    );
})

       return(
         <div>
            <section className="fourth">          

            <div class="awards">
                <img src="../res/Rectangle10copy3.png" width="500px"/>
            </div>

            <div >
                {AwardSection}

                    </div>  
            
           
         </section>
         </div>  
       );
   }

}

export default Awards;


