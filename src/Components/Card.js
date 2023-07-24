import React from 'react'
import './Card.css'
const Card = ({img, modelo, vehiculo, year, color, millas, precio, estado}) => {
  return (
    <div className='card-continer'>
    <section className='card'>
    <img className='card-img' src={img} alt={vehiculo} />
    <div className='card-details'>
    
    <h3>Modelo: <span>{modelo}</span></h3>
    <h3>Vehiculo: {vehiculo}</h3>
    <h3>Año: {year}</h3>
    <h3>Color: {color}</h3>
    <h3>Millas: {millas}</h3>   
    <h3>Precio: ${precio} US</h3>
    <h3>Estado: {estado}</h3>

        </div>
        </section>
        </div>
       
  )
}

export default Card