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
        
        default : 
            return state
    }
}

export default recipesReducer




