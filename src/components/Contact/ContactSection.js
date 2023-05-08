import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import 'aos/dist/aos.css'; 


const ContactSectionStyle = styled.div`
  padding: 0.5rem 0;
  background: rgb(245, 245, 245);
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 4rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
    padding-left: 5rem;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    padding-right: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left {
      padding-left: 0rem;
    }
    .right {
      max-width: 100%;
    }
    .right {
      padding: 1rem 2rem 2rem 2rem;
    }
  }



  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }

  
  
`;

export default function ContactSection() {

  React.useEffect(() => { 
    AOS.init({duration:2000});
    },[]);

  return (
    <>
    
    <ContactSectionStyle>
      <div className="container">
        <div data-aos="zoom-in-up" >
          <SectionTitle heading="Contáctanos" subheading="get in touch" />
        </div>
        <div className="contactSection__wrapper">
          <div data-aos="fade-right"  className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="0251 - 8149220" />
            <ContactInfoItem icon={<MdEmail />} text="info@agromaxgroup.com" />
          </div>
          <div data-aos="fade-left"  className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
    </>
  );
}
