export const ADD_USER = "ADD_USER"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"


 export const addUser= (user)=>{
    user.id = Math.random().toString();
    return {
        type: ADD_USER,
        payload: user,
    }
};

export const deleteUser= (userId)=>{
    return {
        type: DELETE_USER,
        payload: userId,
    }
};

export const editUser= (updateUser)=>{
    return {
        type: EDIT_USER,
        payload: updateUser,
    }
}

