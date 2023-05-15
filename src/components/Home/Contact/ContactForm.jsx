import React, { useState } from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css'; 
import './ContactSection.css';
import './ContactSection.css';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  label {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.1px;
    width: 950px;
  }
  input,
  textarea {
    width: 100%;
    font-size: 13px;
    font-family: 'Montserrat';
    letter-spacing: 0.1px;
    padding: 1.0rem;
    color: var(--gray-1);
    background-color: #FFFFFF;
    outline: none;
    border: solid 1px #E2E2E2; 
    border-radius: 2px;
    margin-top: 0.5rem;
  }
  input:focus-within {
    border: 1.9px solid #47A01A;
    width:773px;
    transition: 0.4s;
    width: 100%;
  }
  textarea {
    min-height: 120px;
    resize: vertical;
  }
  textarea:focus-within {
    border: 1.9px solid #47A01A;
    width:773px;
    transition: 0.4s;
    width: 100%;
  }
  button[type='submit'] {
    display: inline-block;
  }

  @media screen and (max-width: 960px) {
    label {
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.1px;
      width: 100%;
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className='container__Form' data-aos="fade-left" data-aos-once="true" data-aos-duration="1500">
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Nombre
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Correo Electrónico
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Mensaje
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        { /*Btn de Funciones */ }
        <div className='btn-featuredProducts' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
            <button type="submit" className='btn-outline-featuredProducts btn-text'
              >Enviar
            </button>
        </div>
      </FormStyle>
    </div>
  );
}
