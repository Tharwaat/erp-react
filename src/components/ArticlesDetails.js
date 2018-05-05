import React, {Component} from 'react';
import ArticlesDetailsComponent1 from '../components/ArticlesDetailsComponent1'
import ArticlesComponent3 from '../components/ArticlesComponent3'
import '../css/ArticlesDetails.css';

export default class ArticlesDetails extends Component{
    render(){
        return(
         <div>
               
               <div  class ="row" >
                      <div class ="col-lg-12">
                      <img  src='../res/1Untitled-2.jpg' />
                      </div>
                 </div>
             <ArticlesDetailsComponent1
                 img1= '../res/bakegroundUntitled-2.jpg'
                 img2= '../res/22.jpg'
                 img3= '../res/Uuuntitled-2.jpg'
                 HeadLine='Innovtive Young Arabs'
                 date='11/9/2017'
                 paragraph='To say that young Arabs today lack serious opportunities would be the understatement of the century. For millions of Arab youth (about 105 million of them), the outlook consistently looks bleaker.
                           

                                This year’s Arab Human Development Report placed the region’s youth unemployment rate at 29 percent—the highest in the world.
                             
                                This alarming rate, coupled with a growing sense of exclusion, discrimination and weak social and political engagement, makes it easy for us to understand why social media has become the preferred tool for young Arabs, who are utilizing it to network, learn and grow their potential.
                                
                                Sure, a large percentage of today’s Arabic social media content is still predominantly categorized under entertainment.
                                
                                According to YouTube, two hours of video are uploaded every minute in the Middle East and North Africa (MENA) region.
                                A quick look at the daily dose of depressing news coming out of this region also makes this fact easily understandable.
                                
                                However, there is a surprising rise in the number of startups launched by young Arab entrepreneurs, who are using new media to generate opportunities and create social good initiatives.
                                
                                Optimistic young voices in the Levant are all over Facebook, LinkedIn and Instagram. They are tweeting, Snapchatting, YouTubing and using all available tools to create initiatives as part of a growing trend to encourage community participation and solutions at the grassroots level.
                               
                                The following bright ideas are just a small example of young Arab individuals who have found a way to make their voices heard against all odds.
                                
                                Palestine: Build Palestine
                                “I quit my job to launch my dream,” says 26-year-old Derrar Ghanem.
                                
                                “I’ve been wanting to contribute to my community for a while now,” says Ghanem from his hometown in Ramallah.
                                He used to manage a co-working space but was passionate about coming up with a way to help and empower people, and to become an innovator.
                                
                                Using some savings and an unsteady income from freelance jobs, Ghanem and his partner, Besan Abou Joudeh launched Build Palestine last month, a crowdfunding platform to raise funds for cultural and innovative projects with a social impact in Palestine.
                                
                                The small team of volunteers filmed videos, launched a website, and connected with other entrepreneurs to secure a working space, a process that took about eight months. “We crowdfunded ourselves basically,” Ghanem says.
                                
                                His startup helped raise $2,500 for Palestine’s only music and art therapy center, Al Mada Association. It also raised $5,000 to fund a scholarship initiative for young Palestinian refugees.
                                
                                Ghanem now hopes to reach an estimated 12 million supporters within the Palestinian diaspora.
                                
                                The first few months of any startup can mean a lot of stress and excitement—a fact Ghanem does not hide—while stressing the need for more funding to “hire more people and hold more workshops.”
                                
                                But Ghanem wants more than that. He aims “to create a space where people can develop ideas and support the social enterprise in Palestine. Not just a crowdfunding platform.”
                                
                                “We have minds, we have capabilities, although we face more challenges than most of the world, which makes it all the more interesting,”he adds.'
                 />
                 <ArticlesComponent3
                 />
         </div>
        );
    }
}
