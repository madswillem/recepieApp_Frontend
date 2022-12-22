import RecipeCard from "./RecipeCard"

const Recipes = ({data}) => {
    console.log(data)

    return (
        <div className='recipes'>
            <div className='RecipeHeader'>
                <h1 className='Header'>Alle Rezepte</h1>
                <RecipeCard data={data}  />
            </div>
        </div>
    )
}

export default Recipes