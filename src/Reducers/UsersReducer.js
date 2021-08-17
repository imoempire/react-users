 
import { ADD_USER } from "../actions/UsersActions";

const initialState = {
    users: [ 
        { name: 'John', email: 'john@gmail.com', age: '20', id: 'edfr45678238' }
      ],
};

const UsersReducer=(state=initialState, action) => {
        switch (action.type) {
            case ADD_USER:
                return  { ...state.users, users: [...state.users, action.payload] };

            default:
                return state
        }
};

export default UsersReducer;