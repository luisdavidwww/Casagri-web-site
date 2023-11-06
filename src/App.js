import './App.css';
import { AppRouter } from 'routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoibHVpc2RhdmlkMjUiLCJhIjoiY2xvOHNidDJrMDNvOTJqbzRzbWRhY2p3dSJ9.DMLJMZkD29xNGPjBTe5mCQ';


function App() {
  return (
    <AppRouter/>
)
}

export default App;
