import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        
        <div className="item">
          <h1>Links</h1>
          <span>FAQQQQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            We’re a community-driven bookstore bringing you carefully curated reads, quick delivery, secure payments, and guaranteed quality. Discover your next favorite book with us!


          </span>
        </div>
        <div className="item">
          <h1> 📞  Contact</h1>
          <span>
              Have questions or need help?<br/>
              Email: aradhanakumari1492@gmail.com<br/>
              We’re here Mon–Sat, 10 AM – 6 PM<br/>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
          <img src="/img/kitaab.png" alt="" width='140' />
          </span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
