import RecipeCard from "./RecipeCard"

const Recomended = ({ data, onSelect }) => {
    return (
        <div className='recomended'>
            <h1 className='Header'>Vorschläge</h1>
            <RecipeCard data={data} onSelect={onSelect}/>
        </div>
    )
}

export default Recomended