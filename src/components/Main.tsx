import { FormEvent, useState } from "react"

export default function Main() {
  // the fact that "useState" returns an array allows us to name
  // the returned initial state and setState function whatever we want
  // if it returned an object we would be forced to use whatever
  // name the property of the returned object has instead
  const [ingredients, setIngredients] = useState([
    "chicken",
    "oregano",
    "cilantro",
  ])

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const newIngredient = formData.get("ingredient")

    // It is good to develop the habit of using a callback function
    // to update state if you ever rely on the old state to determine new state
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      newIngredient as string,
    ])
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
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
