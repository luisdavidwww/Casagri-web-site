import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';

function CustomRouter({ children }) {
  const navigation = useNavigation();

  useEffect(() => {
    const handleRouteChange = () => {
      const { pathname } = window.location;
      const routeTitle = getRouteTitle(pathname);
      document.title = routeTitle;
    };

    navigation.listen(handleRouteChange);
    handleRouteChange(); // Establecer el título de la pestaña inicialmente

    return () => {
      // Restaurar el título original al desmontar el componente
      document.title = 'Casagri';
    };
  }, [navigation]);

  const getRouteTitle = (pathname) => {
    // Lógica para obtener el título de la pestaña según la ruta
    // Puedes personalizar esta lógica según tus necesidades
    // Por ejemplo, puedes utilizar un objeto de configuración o un mapa de rutas y títulos
    if (pathname === '/') {
      return 'Inicio';
    } else if (pathname === '/about') {
      return 'Acerca de';
    } else if (pathname === '/contact') {
      return 'Contacto';
    }
    // Si no coincide con ninguna ruta, puedes devolver un título predeterminado o vacío
    return 'Casagri';
  };

  return <>{children}</>;
}

export default CustomRouter;