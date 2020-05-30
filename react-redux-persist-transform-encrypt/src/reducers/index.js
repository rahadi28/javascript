export const userActiveReducer = (user = {}, action) => {
    if (action.type === "USER_ACTIVE") {
        return action.payload;
    }
    return user;
};