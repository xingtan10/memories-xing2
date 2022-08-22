import * as api from "../api";
import { AUTH } from "../reducers/auth";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData);
    console.log("sign in");
    const res = await api.signIn(formData);

    navigate("/");
    // console.log(res.data);
    dispatch(AUTH(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData);
    const res = await api.signUp(formData);
    navigate("/");
    console.log(res.data);
    dispatch(AUTH(res.data));
  } catch (err) {
    console.log(err);
  }
};
