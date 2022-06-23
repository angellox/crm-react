import { useEffect, useState } from 'react';

const useFindCliente = (id) => {
    
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect( () => {
        setCargando(!cargando);
        const obtenerCliente = async () => {
            try {
                const url = `http://localhost:4000/api/clientes/${id}`;
                const respuesta = await fetch(url);

                const res = await respuesta.json();
                setCliente(res);

            } catch (error) {
                console.log(error);
            }

            setCargando(false);
            
        }

        obtenerCliente();
    }, []);

  return {
    cliente,
    cargando
  }
}

export default useFindCliente;