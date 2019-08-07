export const setCurrentUser = (user) => ({
    //TODO: Make a constants file to remove literals
    type: 'SET_CURRENT_USER',
    payload: user
});