import React, { useState, useEffect, useRef } from 'react';
//Data
import City from '../../data/daticos/State.json';
//Estilos
import './DropdownOptionsUser.css';

const DropdownOptions = ({ Data, ChangeState, DeleteVar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  // Constante Auxiliar
  const refOne = useRef(undefined);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleclickOutside = (e) => {
    if (!refOne?.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (estado, id ) => {
    setSelectedOption(estado);
    //Aqui va cambiando el estado a elegir
    ChangeState(id);
    setSelectedId(id);
    setIsOpen(false);
  };


  const filteredData = Data.filter((item) =>
    item.estado.toLowerCase().includes(filterText.toLowerCase())
  )



  useEffect(() => {
    if (DeleteVar) {
      // Restablece el valor generico de la lista de Opciones
      setSelectedOption(null);
    } 
  }, [DeleteVar]);

  useEffect(() => {
    document.addEventListener('click', handleclickOutside, true);
  }, []);



  

  return (
    <div className="container_Dropdown_Options-vertion" ref={refOne}>
      <button className="btn_options" type="button"  onClick={toggleDropdown}>
        {selectedOption || 'Seleccionar una opción'}
        {isOpen ? ' ▲' : ' ▼'}
      </button>
      {isOpen ? (
        <div className="container__Options_Scroll">
          
          <ul className="dropdown-options">

          
            {filteredData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(item.estado, item.id)}
                className="List__Options"
              >
                { item.estado }
              </div>
            ))}
          </ul>
        </div>
      ) : null}

      
    </div>
  );
};

export default DropdownOptions;
