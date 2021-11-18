import axios from "axios"
import { ERROR, GET_USERS, ADD_USERS, DELETE_USERS } from "../reducers/Types";

const baseUrl = "https://fakestoreapi.com";

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get(`${baseUrl}/users`);
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
        console.log(res.data);
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        });
    }
};

export const addUsers = (user) => async (dispatch) => {
    try {
      await axios
        .post(`${baseUrl}/users`, user)
        .then((response) => {
          dispatch({
            type: ADD_USERS,
            payload: response.data,
          });
          console.log(response);
        });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
  
export const deleteUsers = (id) => async (dispatch) => {
    try {
        await axios
        .delete(`${baseUrl}/users/${id}`)
        .then((response) => {
            dispatch({
            type: DELETE_USERS,
            payload: response.data,
            });
            console.log(response);
        });
    } catch (error) {
        dispatch({
        type: ERROR,
        payload: error,
        });
    }
};
  