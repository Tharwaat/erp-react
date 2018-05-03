import React from 'react';
import MediaTraining3 from '../components/MediaTraining3'


const CallMedia = ()=>(
    <div>
        <MediaTraining3
        Header="For Actors, Music Artists and Other Public Figures"
        paragraph1="It develops the skills necessary to shape and deliver powerful and engaging presentations<br>to customers, donors, internal corporate teams, and other audiences. For clients who present via video or webinars, we also teach them how to work with the camera effectively and naturally."
        paragraphs={
            [
                "We prepare talent for their journey into the spotlight, including red carpet interviews,<br>press junkets, record launches, feature interviews and other public events. ",
                "Media interviews can be especially challenging for actors, music artists and other celebrities and public figures because people often feel they have a right to know about<br>the personal lives of anyone in the public eye. Celebrities and performers may be temptedto share too much, but there’s a fine line between letting fans get to know who they are and maintaining some healthy boundaries around one’s personal life. We help each client decide what his or her boundaries will be before they face the media.",
                "Sometimes artists and performers forget that a comment that’s tossed off candidly in an interview or in a tweet may be seen as a stronger statement by the media or the public. Our training prepares clients to confidently navigate interviews and public presentations,allowing their own individual personalities to shine through. We have trained clients represented by Universal Music, 300 Entertainment, Disney, Nickelodeon, and other top entertainment studios."
            ]
        }
        />
        </div>

);

export default CallMedia;