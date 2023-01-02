const RecipeCard = ({ data }) => {
    const click = (id) => {}

    return (
        <>
            {data.map((card) => <button key={card.id} id={card.id} className='RecipeCard' onClick={(e) => click(card)}>
                <div className='container'>
                    {card.name}
                </div>
            </button>)}
        </>
    )
}

RecipeCard.defaultProps = {
    data: [],
}

export default RecipeCard

