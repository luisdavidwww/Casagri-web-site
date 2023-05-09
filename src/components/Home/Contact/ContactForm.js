import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
  }
  label {
    font-family: 'Roboto';
    font-size: 16px;
    letter-spacing: 0.5px;
  }
  input,
  textarea {
    width: 100%;
    font-size: 14px;
    font-family: 'Roboto';
    letter-spacing: 0.5px;
    padding: 1.0rem;
    color: var(--gray-1);
    background-color: #FFFFFF;
    outline: none;
    border: solid 1px #E2E2E2; 
    border-radius: 8px;
    margin-top: 0.5rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    display: inline-block;
    padding: 12px 40px;
    font-size: 18px;
    border-radius: 2px;
    text-decoration-line: none;
    outline: none;
    border: 2px solid #E2E2E2;
    cursor: pointer;
    margin-bottom: 100px;
    font-family: 'PT Sans', sans-serif;
    letter-spacing: 0.4px;
  }
  button:hover {
    transition: all 0.3s ease-out;
    background:#a8b402;
    color: rgb(255, 255, 255);
    border: 2px solid #a8b402;
    transition: 250ms;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
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
        <button type="submit">Enviar</button>
      </FormStyle>
    </>
  );
}
