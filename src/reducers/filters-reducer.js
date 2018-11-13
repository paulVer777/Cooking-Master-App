
const filters = {
    difficulty : 'all',
    text : '',
}


const filtersReducer = (state = filters,action) => {
    switch(action.type){
        case 'SET_DIFFICULTY':
            return {
                ...state,
                difficulty:action.difficulty
            }
        case 'SET_TEXT':
            return {
                ...state,
                text:action.txt
            }
        default:
            return state    
    }
}

export default filtersReducer