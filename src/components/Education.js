import React, {Component} from 'react';
import '../css/Biography.css'


class Education extends Component {
    render(){
      const {date} = this.props;
      const {education} = this.props;
     const Activities = this.props.Activities.map((Act , index)=>
     (
      <li key ={index}>
          
           {Act}
         <br/>
      </li>
      
     )
     
     );
     return(

             <section class="second">
                <div class="education">
                    <h1><b>Education</b></h1>
                    <h3>{education}</h3>
                    <h2><u>{date}</u></h2>
                    <p><b>Activities and societies:</b><br/>
                    {Activities}
                    </p>
                </div>
         </section>
        );
    }

}

export default Education;