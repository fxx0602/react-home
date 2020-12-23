import * as userActions from "../constants/userInfo";

export function loginUser(data) {
    return{
        type:userActions.LOGIN_USERINFO,
        data
    }
}



export function updateUser(data) {
    return {
        type:userActions.LOGIN_UPDATE,
        data
    }
}