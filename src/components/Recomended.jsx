import RecipeCard from "./RecipeCard"

const recommended = ({ data, onSelect }) => {
    return (
        <div className='recommended'>
            <h1 className='Header'>Vorschläge</h1>
            <RecipeCard data={data} onSelect={onSelect}/>
        </div>
    )
}

export default recommended