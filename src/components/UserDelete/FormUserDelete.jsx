import React, { useState, useEffect, useContext } from 'react';
import { useFormUserDelete } from '../../hooks/useFormUserDelete.tsx';
import  DescriptionAlerts  from '../Alert/DescriptionAlerts';
import  DropdownOptions  from './DropdownOptions';

import  Loader  from '../Loader/Loader.jsx';
import LogoCasagri from "../../static/casagri-logo-footer.png";

//icons 
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

//Data
import State from '../../data/daticos/State.json';

//estilos
import './FormUserDelete.css'

function isValidEmail(email) {
  // Expresión regular para validar un correo electrónico
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  // Usamos test() para verificar si el correo electrónico coincide con la expresión regular
  return emailRegex.test(email);
}

function FormUserDelete({ onOpen, Delete }) {

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [errorTrim, setErrorTrim] = useState(false);
  const [messageEmail, setMessageEmail] = useState("");
  const [messageContraseña, setMessageContraseña] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [option, setOption] = useState(null);

  //Mensaje de Bienvenida
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  

  // Verifica si todos los campos obligatorios están llenos
  const checkFormValidity = () => {
    if ( email && option && password ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };


  /* Hook de formulario */
  const { email, password, onChange } = useFormUserDelete({
    email: '',
    password: ''
  });


  /* Metodo para Eliminar Usuario */
  const EliminarUsuario = () => {
    let hasError = false; // Variable para rastrear si hay errores
  
    if (email.trim() === '') {
      setErrorTrim(true);
      setMessageEmail("Por favor, ingrese un correo electrónico.");
      hasError = true; // Marca un error si el campo de correo electrónico está vacío
    } else if (!isValidEmail(email)) {
      setErrorTrim(true);
      setMessageEmail("Por favor, ingrese un correo electrónico válido.");
      hasError = true; // Marca un error si el correo electrónico no es válido
    } else {
      setMessageEmail(""); // Borra el mensaje de error si no hay errores en el correo electrónico
    }
  
    if (password.trim() === '') {
      setMessageContraseña("Ingrese su contraseña.");
      hasError = true; // Marca un error si el campo de contraseña está vacío
    } else {
      setMessageContraseña(""); // Borra el mensaje de error si no hay errores en la contraseña
    }
  
    if (!hasError) {
      // Si no hay errores, intenta iniciar sesión
      setErrorTrim(false);

      //Metodo 
      onOpen();

      setWelcomeMessage("Bienvenido"); // Configura el mensaje de bienvenida
      setShowWelcomeMessage(true); // Muestra el mensaje de bienvenida
      // Oculta el mensaje después de 3 segundos
      setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 5000);
    }
  };


  useEffect(() => {
    checkFormValidity();
  }, [email, password, option]);



  useEffect(() => {
    if (Delete) {
      // Restablece los campos del formulario a sus valores iniciales o vacíos
      onChange('', 'email','emailValidator');
      onChange('', 'password');
    } 
  }, [Delete]);

  return (
    <>
      <div>
              <div className=''>
                <div className='Login__logo__img-main' >
                  <img src={ LogoCasagri } alt="Casagri" />
                </div> 
              </div> 

              {/* Titulo */}
                <div className='Title__Container'>
                  <h2 className='AboutUs__title '>Eliminar Usuario</h2>
                </div>

                <div className='delete__text'>
                  <div className='cont_delete'>
                    <p>Lamentamos profundamente que estés considerando eliminar tu cuenta. 
                      Al desactivar tu cuenta, ten en cuenta que todos tus datos personales serán eliminados de nuestros servidores de manera permanente.</p>
                  </div>
                    
                </div>
                
                
            <div className='containerForm'>
              <form className='Container__Form'>
                

                {/* Correo */}
                <div className='Container__Label-Email'>
                  <label htmlFor="email" className='Label__Form'>Correo Electrónico</label>
                  <input
                    type="text"
                    className={errorTrim && messageEmail ? 'Input__Form-Error':'Input__Form'}
                    id="email"
                    placeholder="Ingrese su correo electrónico"
                    value={ email}
                    onChange={(e) => onChange(e.target.value, 'email', 'emailValidator')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        EliminarUsuario();
                      }
                    }}
                    autoComplete="off"
                  />
                  {errorTrim && messageEmail && (
                    <div className='Mensaje__Error'>
                      <div className='MensajeError__Input' style={{position:"absolute"}}>{messageEmail}</div>
                    </div>
                  )}

                  
                </div>

                {/* Contraseña */}
                <div className='Container__Label'>
                  <label htmlFor="password" className='Label__Form'>Contraseña</label>
                  <div className='PasswordInputContainer'>
                    <input
                      type={showPassword ? 'text' : 'password'} // Cambia el tipo de entrada según el estado showPassword
                      className={messageContraseña.length > 0 ? 'Input__Form-Error':'Input__Form'}
                      id="password"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => onChange(e.target.value, 'password')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          EliminarUsuario();
                        }
                      }}
                      autoComplete="off"
                    />
                    <div
                      className='ShowPasswordIcon' // Estilo para el ícono de mostrar/ocultar contraseña
                      onClick={() => setShowPassword(!showPassword)} // Cambia el estado showPassword al hacer clic en el ícono
                    >
                      {showPassword ? <AiFillEye className='iconJustify'/> : <AiFillEyeInvisible className='iconJustify'/> } 
                    </div>
                  </div>
                  {messageContraseña && messageContraseña.length > 0 && (
                    <div className='Mensaje__Error'>
                      <div className='MensajeError__Input' style={{position:"absolute"}}>{messageContraseña}</div>
                      {/*<OutlinedAlerts ErrorMessage={ messageContraseña }/>*/}
                    </div>
                  )}

                </div>

                {/* Estado Y Ciudad */}
                <div className='Container__Label-box'>
                  <div className='Label__Form'>
                    ¿Porque quieres eliminar tu Cuenta?
                  </div>
                  <DropdownOptions Data={ State } ChangeState={ setOption } DeleteVar={ Delete } />
                </div>

                {/* Boton */}
                <div className='container__button'>
                  <button className={ isFormValid ? 'Login__btn__outline main-red' : 'Login__btn__outline__desactive' }
                   type="button" onClick={EliminarUsuario} disabled={!isFormValid} >
                    Eliminar Usuario
                  </button>
                </div>


                <div style={{marginTop:"2rem"}}>
                  {
                    error && error.length > 0 ? (<DescriptionAlerts ErrorMessage={ error }/>):null
                  }  
                </div>
                        
                
              </form>
            </div>

      </div>

   
    </>
    
  );
}

export default FormUserDelete;
