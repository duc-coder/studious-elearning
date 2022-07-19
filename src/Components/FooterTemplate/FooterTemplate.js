import React from 'react';
import styles from '../css/FooterTemplate.css';

export default function FooterTemplate() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='top-div'>
          <div className='footer-list'>
            <div className='footer-list-item'>Studious Business</div>
            <div className='footer-list-item'>Teach on Studious</div>
            <div className='footer-list-item'>Get the App</div>
            <div className='footer-list-item'>About Us</div>
            <div className='footer-list-item'>Contact Us</div>
          </div>

          <div className='footer-list'>
            <div className='footer-list-item'>Careers</div>
            <div className='footer-list-item'>Blog</div>
            <div className='footer-list-item'>Help and Support</div>
            <div className='footer-list-item'>Affiliate</div>
            <div className='footer-list-item'>Investors</div>
          </div>

          <div className='footer-list'>
            <div className='footer-list-item'>Terms</div>
            <div className='footer-list-item'>Privacy policy</div>
            <div className='footer-list-item'>Cookie Settings</div>
            <div className='footer-list-item'>Sitemap</div>
            <div className='footer-list-item'>Accessibility Statement</div>
          </div>
        </div>
        <div className='bottom-div'>
          <div className='logo'>
            <img className='logo-image' src='../img/studious-logo.png' />
            <span className='logo-name'>Studious</span>
          </div>
          <div className='copyright'>© 2022 Studious, Inc.</div>
        </div>
      </div>
    </div>
  )
}
