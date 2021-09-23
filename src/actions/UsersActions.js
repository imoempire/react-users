import { getFirestore } from "redux-firestore";

export const ADD_USER = "ADD_USER"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"
export const SET_ALL_USERS= "SET_ALL_USERS"


 export const addUser= (user)=>{
    user.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('users')
        .add(user).then((docs)=>{
            console.log(docs)
        });
    }
    // return {
    //     type: ADD_USER,
    //     payload: user,
    // }
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

export const getAllUsers =()=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('users')
        .onSnapshot((snapshot)=>{ 
            let users=[];
                snapshot.forEach((doc)=>{
                users.push(doc.data())
                });
                dispatch({
                    type: SET_ALL_USERS,
                    payload: users })
            })
    }
}

