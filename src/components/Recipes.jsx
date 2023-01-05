import RecipeCard from "./RecipeCard"

const Recipes = ({data, onSelect}) => {
    return (
        <div className='recipes'>
            <h1 className='Header'>Alle Rezepte</h1>
            <RecipeCard data={data} onSelect={onSelect} />
        </div>
    )
}

export default Recipes