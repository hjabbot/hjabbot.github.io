import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Swal from 'sweetalert2';

const ContactForm = () => {
  const sentMessage = () => {
    Swal.fire({
      title: "Message sent!",
      text: "Time to sit back and relax",
      icon: "success"
    });
  }
  return (
  <div>
    <form name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSc0L5nARtruFQ_QKonMj-RNK9TFUM4MFb1rUMrG2O-WwcqDGg/formResponse?" target="hidden_iframe" onSubmit={sentMessage}>
      <h2>Contact Me</h2>
      <div name="input-box">
        <label>Full Name</label>
        <input type="text" name="entry.2069977254" className="field" placeholder="Enter your name" required />
      </div>
      <div name="input-box">
        <label>Email Address</label>
        <input type="email" name="entry.332319714" className="field" placeholder="Enter your email address" required />
      </div>
      <div name="input-box">
        <label>How can I help?</label>
        <textarea type="text" name="entry.618086409" className="field mess" placeholder="Enter your message" required />
      </div>
      <input type="submit" value="Submit"></input>
      {/* <button type="submit">Send</button> */}
    </form>
    <iframe name="hidden_iframe" id="hidden_iframe" style={{display:'none'}} onload="if(submitted) {}"></iframe>
  </div>
  );
}


export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
              <ContactForm />
              <SocialMedia />
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
