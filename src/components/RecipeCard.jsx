const RecipeCard = ({ data }) => {
    return (
        <>
            {data.map((card) => <button key={card} id={card} className='RecipeCard' onClick={(e) => click(card)}>
                <div className='container'>
                    {card}
                </div>
            </button>)}
        </>
    )
}

RecipeCard.defaultProps = {
    data: [],
}

export default RecipeCard

