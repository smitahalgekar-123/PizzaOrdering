INITIAL_STATE = {
    smallPizzaCount: 0,
    mediumPizzaCount: 0,
    largePizzaCount: 0,
    adultsCount: 0,
    childrenCount: 0
}


const pizzaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SMALL_PIZZA':
            return {
                ...state,
                smallPizzaCount: action.smallPizzaCount
            }
        case 'MEDIUM_PIZZA':
            return {
                ...state,
                mediumPizzaCount: action.mediumPizzaCount
            }
        case 'LARGE_PIZZA':
            return {
                ...state,
                largePizzaCount: action.largePizzaCount
            }
        case 'ADULTS':
            return {
                ...state,
                adultsCount: action.adultsCount
            }
        case 'CHILDREN':
            return {
                ...state,
                childrenCount: action.childrenCount
            }
        default:
            return state;
    }

}

export default pizzaReducer;