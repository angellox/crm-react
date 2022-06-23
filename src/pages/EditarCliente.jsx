import { useParams } from 'react-router-dom';
import Formulario from '../components/Formulario';
import useFindCliente from '../hooks/useFindCliente';

const EditarCliente = () => {

  //const [cliente, setCliente] = useState({});
  //const [cargando, setCargando] = useState(false);
  const { id } = useParams();

  const { cliente, cargando } = useFindCliente(id);

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Edita la información de tu cliente aquí</p>

      {cliente?.id ? (
        <Formulario 
          cliente={cliente}
          cargando={cargando}
        />
      ) : <p className='font-bold text-xl text-center'>El cliente no existe</p>}
      
    </>
  )
}

export default EditarCliente