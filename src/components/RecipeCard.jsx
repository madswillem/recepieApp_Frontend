import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";

import { useState } from 'react'

const RecipeCard = ({ data, onSelect }) => {
    const [colapsableState, setColapsableState] = useState();
    const [addState, setAddSate] = useState(false);

    const click = (id) => {
        if (colapsableState) {
            setColapsableState() 
        }
        if (!colapsableState) {
            setColapsableState(id)
        }  
    }
    
    const colapsable = (card) => {
        if (colapsableState === card._id) {
            return(
                <div>
                    <ul>
                        {card.ingredeants.map((i) => <li key={i.id}> <span>{i.amount}</span>  <span>{i.ingredient}</span></li>)}
                    </ul>
                    <p>
                        {card.preparation}
                    </p>
                </div>
            )
        }
    }

    const add = (id) => {
        if (addState) {
            setAddSate()
            onSelect(id, false)
        }
        if (!addState) {
            setAddSate(id)
            onSelect(id, true)
        }   
    }

    const resIcon = (id) => {
        if (addState === id) {
            return (
                <AiFillCheckCircle style={{color: 'white', cursor: 'pointer', scale: '1.8'}} onClick={() => add(id)} />
            )  
        }
        if (!addState || addState !== id) {
            return (
                <IoIosAddCircleOutline style={{color: 'white', cursor: 'pointer', scale: '1.8'}} onClick={() => add(id)} />
            )
        }  
    }

    return (
        <>
            {data.map((card) => <button key={card._id} id={card._id} className='RecipeCard' onClick={(e) => click(card._id)}>
                <div className='container'>
                    {card.title}
                    <span id="icon">{resIcon(card._id)}</span>
                    {colapsable(card)}
                </div>
            </button>)}
        </>
    )
}

RecipeCard.defaultProps = {
    data: [],
}

export default RecipeCard

