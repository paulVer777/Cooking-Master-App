import uuidv4 from 'uuid'


const addRecipe = (
    {
        title = 'unknown',
        preparationTime = 'unknown',
        ingredients = [],
        difficulty = 'unknown',
        createdAt = undefined,
        instructions = 'unknown',
        id
    } = {}) => (
    {
        type:'ADD_RECIPE',
        recipe:{
            id,
            title,
            preparationTime,
            ingredients,
            difficulty,
            createdAt,
            instructions
        }   
    }
)

const removeRecipe = (id) => (
    {
        type:'REMOVE_RECIPE',
        id
    }
)

const editRecipe = (id,obj) => (
    {
        type:'EDIT_RECIPE',
        id,
        obj
    }
)

const addIngredient = (id,ingredient) => (
    {
        type:'ADD_INGREDIENT',
        id,
        ingredient
    }
)

const removeIngredient = (recipeId, ingredientId) => (
    {
        type:'REMOVE_INGREDIENT',
        recipeId,
        ingredientId
    }
)


export {addRecipe,removeRecipe, editRecipe, addIngredient, removeIngredient }