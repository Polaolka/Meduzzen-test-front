export const selectIsAuth = state => state.auth.isAuth;
export const selectAuthError = state => state.auth.authError;
export const selectUserId = state => state.auth.id;
export const selectUserName = state => state.auth.name;
export const selectUser = state => state.auth;
export const selectError = state => state.error;