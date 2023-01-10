import './App.css';
import Recipes from './components/Recipes'
import Add from './components/Add'
import Recomended from './components/Recomended'
import { useState, useEffect } from 'react'

function App() {
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      ingredient: '',
      amount: '',
    },
    {
      id: 2,
      ingredient: '',
      amount: '',
    },
    {
      id: 3,
      ingredient: '',
      amount: '',
    }
  ])

  const [descripition, setDescripition] = useState();
  const [recipeName, setrecipeName] = useState();
  const [recipes, setrecipes] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [colormode, setColormode] = useState('light');


  const ingredientPattern = {
    id: 1,
    ingredient: '',
    amount: '',
  }

  useEffect(() => {
  
    const getrecipes = async () => {
      const allrecipesFromServer = await initFetchAllTask()
      setrecipes(allrecipesFromServer)
      const recomendatedrecipesFromServer = await initFetchRecomendationsTask()
      setRecomendations(recomendatedrecipesFromServer)
    }

    getrecipes();
  }, [])

  const initFetchAllTask = async () => {
    const res = await fetch('http://localhost:5000/api')
    const data = await res.json();

    return data
  }
  const initFetchRecomendationsTask = async () => {
    const res = await fetch('http://localhost:5000/api/recomendations')
    const data = await res.json();

    return data
  }


  function POSTTask() {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        ingredeants: ingredients,
        preparation: descripition,
        title: recipeName,
        type: 'recipe'
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:5000/api', options)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  function getID() {
    var LastItem
    var returnValue
    if(ingredients.length >= 1){
      LastItem = ingredients[ingredients.length - 1]
      returnValue = LastItem.id + 1
    }else{
      returnValue = 1
    }
    return returnValue
  }

  const select = (id, type) => {
    if (type === true) {
      fetch('http://localhost:5000/api/select/' + id)
    } else{
      fetch('http://localhost:5000/api/deselect/' + id)
    }
    
  }


/*Updates================================================================================================================================================== */
  const updateDescripition = (value) => {
    setDescripition(value)
  }
  const updaterecipeName = async (value) => {
    setrecipeName(value);
  } 

  const update = (id, value, name) => {
    var ingredients_copy = ingredients;
    var ingredients_lenght = ingredients.length;

    for(let i=0; i < ingredients_lenght; i++){
      if(ingredients_copy[i].id === id){
        if(name === 'ingredeant') {
          console.log("hää")
          ingredients_copy[i].ingredient = value
        }
        if(name === 'amount') {
          ingredients_copy[i].amount = value
        }
      }
    }

    setIngredients(ingredients_copy)
  }

/*Add================================================================================================================================================== */
  const add = () => {
    console.log(recipeName, ingredients, descripition)
    POSTTask();
  }

  const addIngredeant = () => {
    var addIng = ingredientPattern
    addIng.id = getID()
    setIngredients([...ingredients, addIng])
  }

/*Delete================================================================================================================================================== */
  const deleteIngredeant = (id) => {
    setIngredients(ingredients.filter((ing) => ing.id !== id))
  }

//Style
const bgstyle = () => {
  if (colormode === 'dark') {
    var el = document.getElementById('body');
    el.style.backgroundColor = "#22212f";
  }
  if (colormode === 'light') {
    var el = document.getElementById('body');
    el.style.backgroundColor = "#ffffff";
  }
}

bgstyle()

  return (
    <div className="App" id={colormode}>
      <Recipes data={recipes} onSelect={select}/>
      <Recomended data={recomendations} onSelect={select}/>
      <Add data={ingredients} onDelete={deleteIngredeant} onAdd={addIngredeant} onFinish={add} onUpdate={update} onUpdateName={updaterecipeName} onUpdateDescripition= {updateDescripition} />
    </div>
  );
}

export default App;