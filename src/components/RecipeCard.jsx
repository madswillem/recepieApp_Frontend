import { useState } from 'react'

const RecipeCard = ({ data }) => {
    const [colapsableState, setColapsableState] = useState();

    const click = (id) => {
        if (colapsableState) {
            setColapsableState() 
        }
        if (!colapsableState) {
            setColapsableState(id)
        }  
    }
    
    const colapsable = (card) => {
        if (colapsableState == card._id) {
            return(
                <div>
                    <ul>
                        {card.ingredeants.map((i) => <li key={i.id}>{i.ingredient}</li>)}
                    </ul>
                    <p>
                        {card.preparation}
                    </p>
                </div>
            )
        }
    }

    return (
        <>
            {data.map((card) => <button key={card._id} id={card._id} className='RecipeCard' onClick={(e) => click(card._id)}>
                <div className='container'>
                    {card.title}
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

