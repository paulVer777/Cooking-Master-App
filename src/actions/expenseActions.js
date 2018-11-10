import uuidv4 from 'uuid'


const addRecipe = ({title = 'unknown', preparationTime = 'unknown'} = {title: 'kos', preparationTime:'333'}) => (
    {
        type:'ADD_RECIPE',
        recipe:{
            id:uuidv4(),
            title,
            preparationTime
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