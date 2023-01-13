import React from 'react'
import Item from '../item/Item'

function Itemlist({items}) {
  function prueba(element) {
    return <Item key={element.id} element={element}/>
    
  }

  return (
    <div className="row me-0">
            {items.map(prueba)}

    </div>
  )
}

export default Itemlist