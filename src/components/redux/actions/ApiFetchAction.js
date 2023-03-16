export const GET_RESTAURANT_FETCH = 'GET_RESTAURANT_FETCH'
export const GET_MENUCARD_FETCH = `GET_MENUCARD_FETCH`

export const getRestaurantFetch = () => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:5000`)
        const data = await response.json()
        dispatch({
            type: GET_RESTAURANT_FETCH,
            payload: data
        })
    }
}

export const getMenuCardFetch = (id) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:5000/${id}`)
        const data = await response.json()
        dispatch({
            type: GET_MENUCARD_FETCH,
            payload: data.foodData
        })
    }
}