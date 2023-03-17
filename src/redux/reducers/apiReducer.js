import { GET_RESTAURANT_FETCH, GET_MENUCARD_FETCH } from "../actions/ApiFetchAction"

const restaurantState = {
    restaurant: [],
    filterRestaurant: []
}

const menuCardState = {
    menuCard: [],
    filterMenuCard: []
}
export const restaurantReducer = (state = restaurantState, action) => {
    switch (action.type) {
        case GET_RESTAURANT_FETCH:
            return {
                ...state,
                restaurant: action.payload
            };
        default:
            return state
    }
}

export const menuCardReducer = (state = menuCardState, action) => {
    switch (action.type) {
        case GET_MENUCARD_FETCH:
            return {
                ...state,
                menuCard: action.payload
            };
        default:
            return state
    }
}
