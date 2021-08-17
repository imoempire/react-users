<<<<<<< HEAD
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

=======
const initial = {
    users: [
        { name: 'John',
          email: 'john@gmail.com',
          age: '20' }
      ],
}

const UsersReducer=(state={initial}, action) => {
        switch (action.type) {
            case 'ADD_USER':
                return state
                
>>>>>>> 3013a09dc714b346b21345a31c1765eba454fdda
            default:
                return state
        }
};

export default UsersReducer;