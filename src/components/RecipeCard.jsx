const RecipeCard = ({ data }) => {
    console.log(data);
    const click = (id) => {
        document.getElementById(id).style.overflow = 'auto';
    }
    return (
        <>
            {data.map((card) => <button key={card._id} id={card._id} className='RecipeCard' onClick={(e) => click(card._id)}>
                    <div className='container'>
                        {card.title}
                    </div>
                    <div>
                        <ul>
                            {data.map((content) => <li key='1'>1</li>)}
                        </ul>
                    </div>
                    <div>
                        {data}
                    </div>
                </button>)}
        </>
    )
}

RecipeCard.defaultProps = {
    data: [],
}

export default RecipeCard

