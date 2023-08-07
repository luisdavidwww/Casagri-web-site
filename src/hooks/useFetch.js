

  //PETICION BANNERS HOME PRINCIPAL
  export const banner = async ({ BANNERSPUBLICIDAD, BANNERSHOME }) => {
    try {
      setLoanding(true);
  
      // Banner Publicidad -- Peticion a la api
      const response = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${BANNERSPUBLICIDAD}`);
      const data = await response.json();
  
      // Verificar si la respuesta contiene un error
      if (data.error) {
        throw new Error(data.error);
      }
  
      setBanner(data.data);
  
      // Banner Home -- Petición a la api
      const respon = await fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE__TWO}${BANNERSHOME}`);
      const responseData = await respon.json();
  
      // Verificar si la respuesta contiene un error
      if (responseData.error) {
        throw new Error(responseData.error);
      }
  
      setBannerHome(responseData.data);
  
      setLoanding(false);
      setError(null);

    } catch (error) {
      setLoanding(false);
      if (error.message) {
        setError(`Error del servidor: ${error.message}`);
      } else if (error.request) {
        setError('No se pudo conectar con el servidor');
      } else {
        setError('Error desconocido');
      }
    }
  };
  






