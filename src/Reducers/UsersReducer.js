 
import { ADD_USER, DELETE_USER, EDIT_USER, SET_ALL_USERS } from "../actions/UsersActions";

const initialState = {
    users: [ 
        // { name: 'John', email: 'john@gmail.com', age: '20', id: 'edfr45678238' }
      ],
};

const UsersReducer=(state=initialState, action) => {
        switch (action.type) {
            case ADD_USER:
                return  { ...state.users, users: [...state.users, action.payload] };

            case DELETE_USER:
                const keptUsers =state.users.filter((user) => {
                    return user.id !== action.payload;
                  });
                  return {...state, users: keptUsers  }
                  
            case EDIT_USER:
                return {...state, users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                  )}

            case SET_ALL_USERS:
                return{...state, users: action.payload}

            default:
                return state
        }
};

export default UsersReducer;