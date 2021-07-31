import React from 'react';
import '../../App.css';

export default function Contact() {
  return (
    
    // <div className="App">
    // <p>Contact Me</p>
    // <div>
    // <form action="/action_page.php">
    // <label>First Name</label>
    // <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    // <label>Last Name</label>
    // <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


    // <label>Email</label>
    // <input type="email" id="email" name="email" placeholder="Your email" />


    // <label>Message</label>
    // <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    // <input type="submit" value="Submit" />
    // </form>
    // </div>
    // </div>


    <div class="background">
    <div class="container">
      <div class="screen">
        <div class="screen-header">
          <div class="screen-header-left">
            <div class="screen-header-button close"></div>
            <div class="screen-header-button maximize"></div>
            <div class="screen-header-button minimize"></div>
          </div>
          <div class="screen-header-right">
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
          </div>
        </div>
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div class="app-contact">CONTACT INFO : +9770324567</div>
          </div>
          <div class="screen-body-item">
            <div class="app-form">
              <div class="app-form-group">
                <input class="app-form-control" placeholder="NAME"/>
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="EMAIL"/>
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="CONTACT NO"/>
              </div>
              <div class="app-form-group message">
                <input class="app-form-control" placeholder="MESSAGE"/>
              </div>
              <div class="app-form-group buttons">
                <button class="app-form-button">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  
     
  );
}
