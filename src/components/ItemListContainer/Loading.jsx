import React from 'react'
import "./ItemListContainer.css"
import { DotLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='loading'> 
        <DotLoader color="pink"/>
        </div>
  )
}

export default Loading