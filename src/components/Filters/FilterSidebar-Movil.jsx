import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//Componentes
import FiltersBar from './FiltersBar';
import FilterBarNew from './FilterBarNew';
import FilterTilter from './FilterTilter';
import CategoryAccordion from './CategoryAccordion';



export default function FilterSidebar({ Consulta, Path, Marcas, Componentes, Search, fetchDataAndHandleResponse }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 100 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <div>holis</div> : <div>nani</div>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            <CategoryAccordion/>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
         <CategoryAccordion/>
      </List>
    </Box>
  );

  return ( /*  */
    <div className='filter__container__Main__Movil'>
        <div className='Sidebar__Filtro'>
            <React.Fragment key={'right'}>
                <div onClick={toggleDrawer('right', true)} className='Sidebar__Filtro__Title'><FilterTilter component={"Sidebar"}/></div>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                
            >
                <div style={{marginTop:'2rem'}}>
                   <FiltersBar
                   Path={Path} //Base URL
                   Consulta={Consulta} //Parametro Consulta
                   Marcas={Marcas} //Listado de Marcas que están en la categoria 
                   Componentes={Componentes} //Listado de Componentes que están en la categoria 
                   Search={ Search } //Ubicación de la Pagina
                   fetchDataAndHandleResponse={fetchDataAndHandleResponse}/* Metodo para Actualizar el Orden de las Categorias */
                   />
                  {/* <FilterBarNew/> */}
                </div>
                
            </Drawer>
            </React.Fragment>
        </div>

        

    </div>
  );
}
