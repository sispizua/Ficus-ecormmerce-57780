import React from 'react'


const Formulario = ({datosForm,guardarDAtosinput, enviarOrden}) => {
  return (
    <div className='checkout'>
      <h3>Completa el formilario para terminar tu compra !</h3>
    <form className='formulario' onSubmit={enviarOrden}>
            <label>Nombre</label>
            <input type="text" name='nombre' value={datosForm.nombre} onChange={guardarDAtosinput} />

            <label>Telefono</label>
            <input type="text" name='telefono' value={datosForm.telefono} onChange={guardarDAtosinput} />

            <label>Email</label>
            <input type="text" name="email" value={datosForm.email} onChange={guardarDAtosinput} />

            <button type='submit'>Enviar orden</button>

        </form>
        </div>

  )
}

export default Formulario;