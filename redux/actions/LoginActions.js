import { ERROR, USER_LOGIN, USER_LOGOUT } from "../reducers/Types";
import axios from "axios";
import Cookie from "js-cookie";

const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1";

export const userLogin = (user) => async (dispatch) => {
    try {
        const res = await axios.post(`${baseUrl}/user/signin`, user);
        Cookie.set("token", res.data.token);
        dispatch({
            type: USER_LOGIN,
            payload: res.data
        })
        console.log(res);
    } catch(err) {
        const errors = err.response.data.errors
        dispatch({
            type: ERROR,
            payload: errors
        })
        console.log(errors);
    }
}

export const userLogout = (user) => async (dispatch) => {
    dispatch({
      type: USER_LOGOUT,
      payload: user,
    });
    console.log("berhasil logout");
  };