import React from 'react';
import EarlyLife from '../components/EarlyLife'
import Education from '../components/Education'
import occupation from '../components/occupation'
import Awards from '../components/Awards'

const Biography = ()=>(
   <div>
       <EarlyLife 
           img ="/res/Ellipse.png"
           paragraphs ={
             [
               'Recipient of 2005 Best Graduate Project Awards for short documentary.',
               'Winner of EVVY Award for “Best Graduate Project',
               'Award granted for my film “The President’s Daughter “a TV profile of Camellia Al Sadat, Daughter of later Egyptian President Anwar Al Sadat.'
             ]
           }
         />
       <Education 
           date="2003 - 2005"
           education="MA, Broadcast  digital Journalism<"
           Activities ={
             [
               'Recipient of 2005 Best Graduate Project Awards for short documentary.',
               'Winner of EVVY Award for “Best Graduate Project',
               'Award granted for my film “The President’s Daughter “a TV profile of Camellia Al Sadat, Daughter of later Egyptian President Anwar Al Sadat.'
             ]
           }
         />
        <occupation/>
        <Awards
          AwardSection =
          { [
              {
                  MainImg: '../res/sas.png',
                  SecondImg: '../res/2001.png',
                  paragraph: 'She holds a BA in Psychology from the American University of Beirut',
                  ClassName1:'honors1',
                  ClassName2:'ho1'
              },

              {
                  MainImg: '../res/sas.png',
                  SecondImg: '../res/2001.png',
                  paragraph: 'She holds a BA in Psychology from the American University of Beirut',
                  ClassName1:'honors2',
                  ClassName2:'ho2'
              },
               {
                  MainImg: '../res/sas.png',
                  SecondImg: '../res/2001.png',
                  paragraph: 'She holds a BA in Psychology from the American University of Beirut',
                  ClassName1:'honors3',
                  ClassName2:'ho2'
              }
          ]
          }
        />
    </div>
);

export default Biography;