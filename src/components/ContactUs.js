import React, {Component} from 'react';
import '../css/contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactUS = ()=>(
    <div> 
		<div className="wrapper">
            <div id="h">
			
		     <img className ="himg" alt="object" src="../res/Vector Smart Object copy 22.png"/>
		    </div>
		
		<div className ="images">
			<h1 className = "h1SendMsg">
                 <u>Send J</u>
               essy Message 
            </h1>
			<p className = "pSendMsg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            </p> 
			<img className ="imgSendMsg" alt="rectangle" src="../res/Rectangle 1.png"/>
		</div>
		
		<div className="textinput">
			<form action="">
				<input type="text" name="name" placeholder=" Name"/>
				<br/>
				<input type="text" name="email" placeholder=" Email"/>
				<br/>
				<input type="text" name="subject" id="subject" placeholder=" Subject"/>
                <br/>
				<textarea className="message" placeholder=" Message" form="mssg">
                </textarea>
                <br/>
				<input type="submit" name="Send" value="Send" />
				
			
			</form>
	   </div>
      </div>
    </div>
	);

export default ContactUS;