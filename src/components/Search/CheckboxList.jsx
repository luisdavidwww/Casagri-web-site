import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Form from 'react-bootstrap/Form';

//Estilos
import './FiltersBar.css'

export default function CheckboxList() {

  return (
    <>
    <Form>
        <div className="mb-3">
            <Form.Check  id={`check-api-`}>
              <Form.Check.Input  isValid />
              <Form.Check.Label className='subtitle__Filter__check' >{`Marca 1`}</Form.Check.Label>
            </Form.Check>
        </div>
        <div className="mb-3">
            <Form.Check  id={`check-api-`}>
              <Form.Check.Input   isValid />
              <Form.Check.Label className='subtitle__Filter__check' >{`Marca 2`}</Form.Check.Label>
            </Form.Check>
        </div>
        <div className="mb-3">
            <Form.Check  id={`check-api-`}>
              <Form.Check.Input  isValid />
              <Form.Check.Label className='subtitle__Filter__check' >{`Marca 3`}</Form.Check.Label>
            </Form.Check>
        </div>
      </Form>
    </>
    
  );
}