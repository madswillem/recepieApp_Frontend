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
  const [recepieName, setRecepieName] = useState();
  const [recepies, setRecepies] = useState([]);

  const ingredientPattern = {
    id: 1,
    ingredient: '',
    amount: '',
  }

  useEffect(() => {
    const getRecepies = async () => {
      const recepiesFromServer = await fetchTasks()
      setRecepies(recepiesFromServer)
    }

    getRecepies();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/posts')
    const data = await res.json();

    return data
  }
  function POSTTask() {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        ingredeants: ingredients,
        preparation: descripition,
        title: recepieName,
        type: 'recepie'
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:5000/api/posts', options)
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



  const updateDescripition = (value) => {
    setDescripition(value)
  }
  const updateRecepieName = async (value) => {
    setRecepieName(value);
  }

  const update = (id, value, name) => {
    var ingredients_copy = ingredients;
    var ingredients_lenght = ingredients.length;

    for(let i=0; i < ingredients_lenght; i++){
      if(ingredients_copy[i].id === id){
        if(name === 'ingredeant') {
          ingredients_copy[i].ingredient = value
        }
        if(name === 'amount') {
          ingredients_copy[i].amount = value
        }
        ingredients_copy[i].ingredient = value
      }
    }

    setIngredients(ingredients_copy)
  }

  const add = () => {
    console.log(recepieName, ingredients, descripition)
    POSTTask();
  }

  const addIngredeant = () => {
    var addIng = ingredientPattern
    addIng.id = getID()
    setIngredients([...ingredients, addIng])
  }

  const deleteIngredeant = (id) => {
    setIngredients(ingredients.filter((ing) => ing.id !== id))
  }

  return (
    <div className="App">
      <Recipes data={recepies}/>
      <Recomended />
      <Add data={ingredients} onDelete={deleteIngredeant} onAdd={addIngredeant} onFinish={add} onUpdate={update} onUpdateName={updateRecepieName} onUpdateDescripition= {updateDescripition}/>
    </div>
  );
}

export default App;