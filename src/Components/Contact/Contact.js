import React from 'react';
import './Contact.css';
import Github from '../Project/Row/image/github-logo.svg';

const Contact = () => (
  <div className="Contact" id="c">
  <h1 className="Contact_hedding">CONTACT</h1>
  <p className="Email"> 김장현 </p>
  <p className="Email"> kimjh2369@gmail.com </p>
  <p className="Email"> 010-2418-2369 </p>
 <a href="https://github.com/JANGHYUNn?tab=repositories"> <img src={Github} alt="github" className="Github"></img></a>
  </div>
);


export default Contact;