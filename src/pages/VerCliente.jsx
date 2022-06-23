import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import useFindCliente from '../hooks/useFindCliente';

const VerCliente = () => {

    //const [cliente, setCliente] = useState({});
    //const [cargando, setCargando] = useState(false);

    const { id } = useParams();
    const { cliente, cargando } = useFindCliente(id); 

  return (

        cargando ? 
            <Spinner /> : Object.keys(cliente).length === 0 ? 
            <p>No hay resultados</p> : (
            <div>
                {!cargando && (
                    <>
                        <h1 className='font-black text-4xl text-blue-900'>Ver Cliente: {cliente.nombre}</h1>
                        <p className='mt-3'>Información del cliente</p>

                        {cliente.email && (
                            <p className='text-2xl mt-4 text-gray-600'>
                                <span className='text-gray-800 uppercase font-bold'>Email: </span>
                            {cliente.email}
                            </p>
                        )}
                        {cliente.telefono && (
                            <p className='text-2xl mt-4 text-gray-600'>
                                <span className='text-gray-800 uppercase font-bold'>Teléfono: </span>
                            {cliente.telefono}
                            </p>
                        )}
                        
                        {cliente.empresa && (
                            <p className='text-2xl mt-4 text-gray-600'>
                                <span className='text-gray-800 uppercase font-bold'>Empresa: </span>
                            {cliente.empresa}
                            </p>
                        )}

                        {cliente.notas && (
                            <p className='text-2xl mt-4 text-gray-600'>
                                <span className='text-gray-800 uppercase font-bold'>Notas: </span>
                            {cliente.notas}
                            </p>
                        )}
                    </>
                )}
            </div>
        )
    )
}

export default VerCliente;