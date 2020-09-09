
export const initialState = {
    bascket: []
} 

export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM'
}

export const reducer = (state, action) => {
        console.log(action)
        switch (action.type) {
            case actionTypes.ADD_ITEM:
                return {
                    ...state,
                    bascket: [...state.bascket, action.item]
                }
        
            default:
                return state
        }
}