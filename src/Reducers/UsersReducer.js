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
                
            default:
                return state
        }
};

export default UsersReducer;