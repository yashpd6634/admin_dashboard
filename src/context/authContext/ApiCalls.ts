import axios from "axios";
import { UserInput, loginFailure, loginStart, loginSuccess } from "./AuthActions";
import { ActionType } from "./AuthReducer";


export const login = async (user: any, dispatch: React.Dispatch<ActionType>) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("auth/login", user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    } catch(err) {
        dispatch(loginFailure());
    }
};