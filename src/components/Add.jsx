import Ingredeant from "./Ingredeant"

const Add = ({ data, onDelete, onAdd, onFinish, onUpdate, onUpdateName, onUpdateDescripition }) => {
    return (
        <div className='add'>
            <h1 className='Header'>Hinzufügen</h1>
            <input type="text" placeholder="Name" onChange = {(e) => onUpdateName(e.target.value)}/>
            <Ingredeant data={data} onDelete={onDelete} onUpdate={onUpdate}/>
            <textarea name="text" cols="25" rows="5" onChange = {(e) => onUpdateDescripition(e.target.value)}></textarea>
            <div>
                <button onClick={onAdd}>Neu Zutat</button>
                <button onClick={onFinish}>Hinzufügen</button>
            </div>
        </div>
    )
}

export default Add