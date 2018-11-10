
const filtrator = (arr,filters) => {

arr.map((value,index) => {

    const difficulty = !filters.difficulty || value.difficulty === filters.difficulty
    const text = value.title.toLowerCase().includes(filters.text.toLowerCase())    

    return difficulty && text

})
}

export {filtrator}