
export const initialState = {
    bascket: [],
    user: null
} 

export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    SET_USER: 'SET_USER',
    LOG_OUT: 'LOG_OUT',
    EMPTY_BASKET: 'EMPTY_BASKET'
}

export const reducer = (state, action) => {
        console.log(action)
        switch (action.type) {
            case actionTypes.SET_USER:
                return {
                    ...state,
                    user: action.user
                }
            case actionTypes.LOG_OUT:
                return {
                    ...state,
                    user: null
                }
            case actionTypes.ADD_ITEM:
                return {
                    ...state,
                    bascket: [...state.bascket, action.item]
                }
            case actionTypes.EMPTY_BASKET:
                return {
                    ...state,
                    bascket: []
                }
            case actionTypes.REMOVE_ITEM:
                const index = state.bascket.find(
                    item => item.id === action.id
                )

                const newBascket = [...state.bascket]

                if(index) {
                    newBascket.splice(index, 1)
                } else {
                    console.warn(
                        "There's no item with this ID"
                    )
                }

                return {
                    ...state,
                    bascket: [...newBascket]
                }
        
            default:
                return state
        }
}