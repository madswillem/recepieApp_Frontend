import Ingredient from './Ingredeant'

import { useState } from 'react'

const Add = ({ data, onDelete, onAdd, onFinish, onUpdate, onUpdateName, onUpdateDescripition }) => {
    const [textareaheight, setTextareaheight] = useState(1); 
  
    const handleChange = (event) => {    

        onUpdateDescripition(event.target.value)

        //console.log( event.target.rows ) 
        const height = event.target.scrollHeight; 
        const rowHeight = 17; 
        const trows = Math.ceil(height / rowHeight) - 1; 
        if (trows >= textareaheight || trows < textareaheight) { 
      
            setTextareaheight(trows); 
      
        }  
    } 

    return (
        <div className='add'>
            <h1 className='Header'>Hinzufügen</h1>
            <input type="text" placeholder="Name" onChange = {(e) => onUpdateName(e.target.value)}/>
            <Ingredient data={data} onDelete={onDelete} onUpdate={onUpdate}/>
            <textarea id="addTextarea" name="text" cols="63" rows={textareaheight} onChange = {(e) => handleChange(e)}></textarea>
            <div>
                <button onClick={onAdd}>Neu Zutat</button>
                <button onClick={onFinish}>Hinzufügen</button>
            </div>
        </div>
    )
}

export default Add