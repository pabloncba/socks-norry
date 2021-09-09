import React from 'react'

function ItemListContainer(props) {

    
    

    return (
        <div className="itemsContainer">


            


            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
               
               <h2>Bienvenido {props.nombre},   a nuestro sitio!!!</h2> 
            </div>
        </div>
    )
}

export default ItemListContainer
