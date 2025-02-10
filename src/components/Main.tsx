import { useState } from "react"

export default function Main() {
  // the fact that "useState" returns an array allows us to name
  // the returned initial state and setState function whatever we want
  // if it returned an object we would be forced to use whatever
  // name the property of the returned object has instead
  const [ingredients, setIngredients] = useState<string[]>([])

  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient") as string
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  )
}
