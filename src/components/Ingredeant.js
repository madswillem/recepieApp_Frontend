import { FaTimes } from 'react-icons/fa'

const Ingredeant = ({ data, onDelete, onUpdate }) => {
    return (
        <>
         {data.map((ing) => (
            <div key={ing.id} id='ingredeant'>
                <input key={ing.ingredeant} type="text" id='name' placeholder="Zutat" onChange={(e) => onUpdate(ing.id, e.target.value, 'ingredeant')} />
                <input key={ing.amount} type="text" id='amount' placeholder="Menge" onChange={(e) => onUpdate(ing.id, e.target.value, 'amount')}/>
                <div key={ing.id} id='delte'> <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(ing.id)} /> </div>
            </div>
         ))}
        </>
    )
}

export default Ingredeant