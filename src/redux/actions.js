const getSetIsLoading = (isLoading) => {
    return {
        type: 'SET_IS_LOADING',
        payload: isLoading
    }
}

const getSetTodoList = (list) => {
    return {
        type: 'SET_TODO_LIST',
        payload: list
    }
}

export {
    getSetIsLoading,
    getSetTodoList
}