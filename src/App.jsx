import React, { Suspense } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Layout from './layout/Layout';
import NuevoCliente from './pages/NuevoCliente';
import EditarCliente from './pages/EditarCliente';
import VerCliente from './pages/VerCliente';
import Spinner from './components/Spinner';

const Inicio = React.lazy( () => import('./pages/Inicio') );

const InicioPage = () => (
  // Muestra spinner hasta que el componente está listo
  <Suspense fallback={<Spinner />}>
    <Inicio />
  </Suspense>
);

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
          <Routes>
              <Route path='/clientes' element={<Layout />}>
                <Route index element={<InicioPage />}/>
                <Route path='nuevo' element={<NuevoCliente />}/>
                <Route path='editar/:id' element={<EditarCliente />}/>
                <Route path=':id' element={<VerCliente />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    )
  }
}



export default App;
