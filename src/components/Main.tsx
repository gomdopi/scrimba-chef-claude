import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {
  // the fact that "useState" returns an array allows us to name
  // the returned initial state and setState function whatever we want
  // if it returned an object we would be forced to use whatever
  // name the property of the returned object has instead
  const [ingredients, setIngredients] = useState<string[]>([])
  const [recipeShown, setRecipeShown] = useState(false)

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient") as string
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  function toggleRecipeShown() {
    setRecipeShown(prevRecipeShown => !prevRecipeShown)
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
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  )
}
