import { ADD_STORE, DELETE_STORE, FIND_STORE, STORES_LOADED_FAIL, STORES_LOADED_SUCCESS, UPDATE_STORE } from "../contexts/constants"

export const storeReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case STORES_LOADED_SUCCESS:
            return {
                ...state,
                stores: payload,
                storesLoading: false
            }
        case STORES_LOADED_FAIL:
            return {
                ...state,
                stores: [],
                storesLoading: false
            }
        case ADD_STORE:
            return {
                ...state,
                stores: [...state.stores],
                storesLoading: false
            }
        case DELETE_STORE:
            return {
                ...state,
                stores: state.stores.filter(store => store._id !== payload)
            }
        case FIND_STORE:
            return { ...state, store: payload }
        case UPDATE_STORE:
            const newStores = state.stores.map(store => store._id === payload._id ? payload : store)
            return {
                ...state,
                stores: newStores
            }

        default:
            return state
    }
}