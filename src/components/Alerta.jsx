import React from 'react'

class Alerta extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const { nombre, email, empresa, telefono  } = this.props.errors;

        return (
            <div className='text-center my-4 bg-red-600 text-white font-bold p-3 uppercase'>
                {nombre || email || empresa || telefono}
            </div>
        )
    }
}

export default Alerta;