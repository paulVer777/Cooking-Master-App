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




export {addRecipe,removeRecipe, editRecipe}