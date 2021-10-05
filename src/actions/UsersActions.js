
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
   
};

export const deleteUser= (userId)=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('users')
        .doc(userId).delete().then(()=>{})
    } 
};

export const editUser= (updateUser)=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('users')
        .doc(updateUser.id).set(updateUser)
        .then(()=>{})
    }
}

export const getAllUsers =()=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('users')
        .orderBy('name')
        .onSnapshot((snapshot)=>{ 
            let users=[];
                snapshot.forEach((doc)=>{
                users.push({...doc.data(), id:doc.id})
                });
                dispatch({
                    type: SET_ALL_USERS,
                    payload: users })
            })
    }
}

