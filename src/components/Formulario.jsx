import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Alerta from './Alerta';
import Spinner from './Spinner';

const Formulario = ({ cliente, cargando }) => {

    const navigate = useNavigate();

    const clienteValidation = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo')
            .required('El nombre del cliente es obligatorio'),

        empresa: Yup.string()
            .required('El nombre de la empresa es obligatorio'),

        email: Yup.string()
            .email('Escriba un email válido')
            .required('El email es obligatorio'),

        telefono: Yup.number()
            .positive('Número no válido')
            .integer('Número no válido')
            .typeError('Escriba un número válido')
    });

    const handleSubmit = async (values) => {
        let config, url;
        try {
            if(cliente.id) {
                // Adicionando id para API en Java
                values.id = cliente.id;

                url = `http://localhost:4000/api/clientes/${cliente.id}`;
                config = {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
            } else {
                url = `http://localhost:4000/api/clientes`;
                config = {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
            }

            const respuesta = await fetch(url, config);
            await respuesta.json();

            navigate('/clientes');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        cargando ? <Spinner /> : (
            <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-3/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl uppercase text-center bg-white'>{cliente?.id ? 'Editar cliente' : 'Agregar cliente'}</h1>

                <Formik
                    initialValues={{
                        nombre: cliente?.nombre ?? '',
                        empresa: cliente?.empresa ?? '',
                        email: cliente?.email ?? '',
                        telefono: cliente?.telefono ?? '',
                        notas: cliente?.notas ?? ''
                    }}
                    enableReinitialize={true}
                    onSubmit={async (values, { resetForm }) => {
                        await handleSubmit(values);
                        resetForm();
                    }}
                    validationSchema={clienteValidation}
                >
                    {({ errors, touched }) => {

                        return (
                            <Form className='mt-10'>
                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='nombre'
                                    >Nombre: </label>
                                    <Field
                                        id='nombre'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-slate-100 rounded-md'
                                        placeholder='Nombre del cliente'
                                        name='nombre'
                                    />
                                    {errors.nombre && touched.nombre ? (
                                        <Alerta errors={errors} />
                                    ) : null}
                                </div>

                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='empresa'
                                    >Empresa: </label>
                                    <Field
                                        id='empresa'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-slate-100 rounded-md'
                                        placeholder='Empresa del cliente'
                                        name='empresa'
                                    />
                                    {errors.empresa && touched.empresa ? (
                                        <Alerta errors={errors} />
                                    ) : null}
                                </div>

                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='email'
                                    >Email: </label>
                                    <Field
                                        id='email'
                                        type='email'
                                        className='mt-2 block w-full p-3 bg-slate-100 rounded-md'
                                        placeholder='Email del cliente'
                                        name='email'
                                    />
                                    {errors.email && touched.email ? (
                                        <Alerta errors={errors} />
                                    ) : null}
                                </div>

                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='telefono'
                                    >Teléfono: </label>
                                    <Field
                                        id='telefono'
                                        type='tel'
                                        className='mt-2 block w-full p-3 bg-slate-100 rounded-md'
                                        placeholder='Teléfono del cliente'
                                        name='telefono'
                                    />
                                    {errors.telefono && touched.telefono ? (
                                        <Alerta errors={errors} />
                                    ) : null}
                                </div>

                                <div className='mb-4'>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='notas'
                                    >Notas: </label>
                                    <Field
                                        as='textarea'
                                        id='notas'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-slate-100 rounded-md h-40'
                                        placeholder='Notas del cliente'
                                        name='notas'
                                    />
                                </div>

                                <input
                                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg hover:cursor-pointer'
                                    type='submit'
                                    value={cliente?.id ? 'Editar cliente' : 'Agregar cliente'}
                                />

                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )

    )
}

Formulario.defaultProps = {
    cliente: {},
    cargando: false
}

export default Formulario;