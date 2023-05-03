import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

//Estilos
import './FiltersBar.css'

export default function CheckboxList({component}) {

  return (
    <>
    {
      component === "Brand" ? (
      <Form>
        <div className="CheckboxList">
            <Form.Check  id={`check-api-1`}>
              <Form.Check.Input  isValid />
              <Form.Check.Label className='subtitle__Filter__check' >{`Marca 1`}</Form.Check.Label>
            </Form.Check>
        </div>
        <div className="CheckboxList">
            <Form.Check  id={`check-api-2`}>
              <Form.Check.Input   isValid />
              <Form.Check.Label className='subtitle__Filter__check' >{`Marca 2`}</Form.Check.Label>
            </Form.Check>
        </div>
        <div className="CheckboxList">
            <Form.Check  id={`check-api-3`}>
              <Form.Check.Input  isValid />
              <Form.Check.Label className='subtitle__Filter__check' >{`Marca 3`}</Form.Check.Label>
            </Form.Check>
        </div>
      </Form>

      ):
      (
        <Form>
          <div className="filter__container__Main" style={{marginBottom:'0.7rem'}}>
              <Form.Check  id={`check-api-4`}>
                {/*<Form.Check.Input  isValid />*/}
                <Form.Check.Label className='subtitle__Filter__check' >
                  <Link style={{textDecoration:'none', color:'#23263b '}} to={`/Category/buscar`}>Lo más destacado</Link>
                </Form.Check.Label>
              </Form.Check>
          </div>
          <div className="filter__container__Main" style={{marginBottom:'0.7rem'}}>
              <Form.Check  id={`check-api-5`}>
                {/*<Form.Check.Input  isValid />*/}
                <Form.Check.Label className='subtitle__Filter__check' >Precios de mayor a menor</Form.Check.Label>
              </Form.Check>
          </div>
          <div className="filter__container__Main" style={{marginBottom:'0.7rem'}}>
              <Form.Check  id={`check-api-6`}>
                {/*<Form.Check.Input  isValid />*/}
                <Form.Check.Label className='subtitle__Filter__check' >Precios de menor a mayor</Form.Check.Label>
              </Form.Check>
          </div>
        </Form>

      )

    }
    
    </>
    
  );
}