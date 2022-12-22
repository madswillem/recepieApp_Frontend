import RecipeCard from "./RecipeCard"

const Recomended = () => {
    return (
        <div className='recomended'>
            <h1 className='Header'>Vorschläge</h1>
            <RecipeCard data={window.$RecomendedRecepies}/>
        </div>
    )
}

export default Recomended