import RecipeCard from "./RecipeCard"

const Recipes = ({data}) => {
    return (
        <div className='recipes'>
            <h1 className='Header'>Alle Rezepte</h1>
            <RecipeCard data={data}  />
        </div>
    )
}

export default Recipes