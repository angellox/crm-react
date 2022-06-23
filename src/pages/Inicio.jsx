import React from 'react'
import Cliente from '../components/Cliente';

class Inicio extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clientes: [] };
    this.handleEliminar = this.handleEliminar.bind(this);
  }

  async componentDidMount() {
    try {
      const url = 'http://localhost:4000/api/clientes'; 
      const respuesta = await fetch(url);

      const clientes = await respuesta.json();
      this.setState({ clientes });

    } catch (error) {
      console.log(error);
    }
  }

  async handleEliminar(id) {

    const { clientes } = this.state;
    const confirmar = confirm('¿Deseas eliminar este cliente');

    if(confirmar){
      try {
        const url = `http://localhost:4000/api/clientes/${id}`;
        const respuesta = await fetch(url, {
          method: 'DELETE'
        });

        await respuesta.json();

        const arrayClientes = clientes.filter( cliente => cliente.id != id );
        this.setState({ clientes: arrayClientes });

      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {

    const { clientes } = this.state;

    return(
      <>
        <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className='mt-3'>Administra tus clientes</p>

        <table className='w-full mt-5 table-auto shadow bg-white'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Empresa</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

          <tbody>
            { clientes.map( cliente => (
                <Cliente 
                  key={cliente.id}
                  cliente={cliente}
                  handleEliminar={this.handleEliminar}
                />
            )) }
          </tbody>
        </table>
      </>
    )
  }
}

export default Inicio;