import { createContext, useReducer, useState } from "react";
import { storeReducer } from "../reducers/StoreReducer";
import { apiUrl, STORES_LOADED_SUCCESS, STORES_LOADED_FAIL, ADD_STORE, DELETE_STORE, UPDATE_STORE, FIND_STORE } from "./constants";
import axios from "axios";

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
    //state 
    const [storeState, dispatch] = useReducer(storeReducer, {
        store: null,
        stores: [],
        storesLoading: true
    })
    //Modal handle
    const [showAddStoreModal, setShowAddStoreModal] = useState(false)
    const [showUpdateStoreModal, setShowUpdateStoreModal] = useState(false)

    const [showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    })



    //get all store 
    const getStores = async () => {
        try {
            const response = await axios.get(`${apiUrl}/store`)
            if (response.data.success) {
                dispatch({ type: STORES_LOADED_SUCCESS, payload: response.data.store })
            }
        } catch (error) {
            dispatch({ type: STORES_LOADED_FAIL })
        }
    }

    // get one item
    const getItem = async (id) => {
        try {
            const response = await axios.get(`${apiUrl}/store/${id}`)
            dispatch({ type: STORES_LOADED_SUCCESS, payload: response.data.store })
        } catch (error) {
            dispatch({ type: STORES_LOADED_FAIL })
        }
    }



    // // Add post
    // const addPost = async newPost => {
    //     try {
    //         const response = await axios.post(`${apiUrl}/posts`, newPost)
    //         if (response.data.success) {
    //             dispatch({ type: ADD_STORE, payload: response.data.stores })
    //             return response.data
    //         }
    //     } catch (error) {
    //         return error.response.data ? error.response.data : { success: false, message: 'Server error' }
    //     }
    // }

    // // delete post
    // const deleteStore = async storeId => {
    //     try {
    //         const response = await axios.delete(`${apiUrl}/posts/${storeId}`)
    //         if (response.data.success) {
    //             dispatch({ type: DELETE_STORE, payload: storeId })
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // // update 
    // const updateStore = async updatedStore => {
    //     try {
    //         const response = await axios.put(`${apiUrl}/store/${updatedStore._id}`, updatedStore)
    //         if (response.data.success) {
    //             dispatch({ type: UPDATE_STORE, payload: response.data.store })
    //             return response.data
    //         }
    //     } catch (error) {
    //         return error.response.data ? error.response.data : { success: false, message: 'Server error' }

    //     }
    // }


    // // find post click when update 
    // const findStore = storeId => {
    //     const store = storeState.stores.find(store => store._id === storeId)
    //     dispatch({ type: FIND_STORE, payload: store })
    // }


    // post context data 
    const storeContextData = { storeState, getStores, getItem }
    return (
        <StoreContext.Provider value={storeContextData}>
            {children}
        </StoreContext.Provider>

    )
}
export default StoreContextProvider



