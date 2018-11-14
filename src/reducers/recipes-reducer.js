const recipes = []

const recipesReducer = (state = recipes, action) => {
    switch(action.type){
        case 'ADD_RECIPE':
            return [...state,action.recipe]
        case 'REMOVE_RECIPE':
            return state.filter((value,index) => value.id !== action.id)
        case 'EDIT_RECIPE':
            return state.map((value,index) => {

             return value.id === action.id ? {...value, ...action.obj} : value
        
            })
        case 'ADD_INGREDIENT':
            return state.map((value,index) => {

              return  value.id === action.id ? {

                    ...value,
                     ingredients:[...value.ingredients,action.ingredient]

                }
                :
                value
            })
        case 'REMOVE_INGREDIENT':
            return state.map((value, index) => {

                return value.id === action.recipeId ? {

                    ...value,
                    ingredients:value.ingredients.filter((value, index) => value.id !== action.ingredientId )
                }
                :
                value
            })
        default : 
            return state
    }
}

export default recipesReducer




