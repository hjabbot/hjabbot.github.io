import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration} from "../../portfolio";
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
    <form className="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSc0L5nARtruFQ_QKonMj-RNK9TFUM4MFb1rUMrG2O-WwcqDGg/formResponse?" target="hidden_iframe" onSubmit={sentMessage}>
      <table>
        <tr>
          <th><h2>Contact Me</h2></th>
        </tr>
        <tr>
          <td align='right'><span>Full Name</span></td>
          <td><textarea type="text" name="entry.2069977254" class="fixed" placeholder="Enter your name" required /></td>
        </tr>
        <tr>
          <td align='right'><span>Email Address</span></td>
          <td><textarea type="email" name="entry.332319714" class="fixed" placeholder="Enter your email address" required /></td>
        </tr>
        <tr>
          <td align="right"><span>How can I help?</span></td>
          <td><textarea type="text" name="entry.618086409"  class="notfixed" placeholder="Enter your message" required /></td>
        </tr>
        <tr>
          <td></td>
          <td align='right'><input type="submit" value="Submit" id="submit" class="main-button" ></input></td>
        </tr>
      </table>
    </form>
    <iframe title="hidden_iframe" name="hidden_iframe" id="hidden_iframe" style={{display:'none'}} onload="if(submitted) {}"></iframe>
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
