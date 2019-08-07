const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        //TODO: Remove and add from Constants file
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;