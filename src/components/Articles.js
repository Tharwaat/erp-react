import React, {Component} from 'react';
import ArticlesComponent1 from '../components/ArticlesComponent1'
import ArticlesComponent2 from '../components/ArticlesComponent2'
import ArticlesComponent3 from '../components/ArticlesComponent3'
import '../css/Articles.css';

export default class Articles extends Component{
    render(){
        return(
         <div>
               
               <div  class ="row" >
                      <div class ="col-lg-12">
                      <img  src='../res/1Untitled-2.jpg' />
                      </div>
                 </div>
             <ArticlesComponent1
                 img1= '../res/bakegroundUntitled-2.jpg'
                 img2= '../res/pic1Untitled-2.jpg'
                 img3= '../res/Uuuntitled-2.jpg'
                 HeadLine='Innovtive Young Arabs'
                 date='11/9/2017'
                 paragraph='To say that young Arabs today lack serious opportunities would be the understatement of the century.For millions of Arab youth (about 105 million of them), the outlook consistently looks bleaker.'
                 />
                 <br/>
                 <br/>
                 <br/>
                 <ArticlesComponent2
                 img1= '../res/bakegroundUntitled-2.jpg'
                 img2= '../res/29855131_1648109265285869_2034779399_n.jpg'
                 img3= '../res/Uuuntitled-2.jpg'
                 HeadLine='Innovtive Young Arabs'
                 date='11/9/2017'
                 paragraph='To say that young Arabs today lack serious opportunities would be the understatement of the century.For millions of Arab youth (about 105 million of them), the outlook consistently looks bleaker.'
                 />
                 <br/>
                 <br/>
                 <br/>
                 <ArticlesComponent1
                 img1= '../res/bakegroundUntitled-2.jpg'
                 img2= '../res/pic1Untitled-2.jpg'
                 img3= '../res/Uuuntitled-2.jpg'
                 HeadLine='Innovtive Young Arabs'
                 date='11/9/2017'
                 paragraph='To say that young Arabs today lack serious opportunities would be the understatement of the century.For millions of Arab youth (about 105 million of them), the outlook consistently looks bleaker.'
                 />
                 <ArticlesComponent3/>
         </div>
        );
    }
}
