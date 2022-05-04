// export const FETCH_USERS = "FETCH_USERS";

export interface UserState {
    users: any[];
    loading: boolean;
    error: string | null;
}

export enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

// export interface FetchUsersAction {
//     type: typeof FETCH_USERS; // тип констант или через typeof или enum
// }

export interface FetchUsersAction {
    type: UserActionType.FETCH_USERS; // тип констант или через typeof или enum
}

export interface FetchUsersSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS;
    payload: any[];
}

export interface FetchUsersErrorAction {
    type: UserActionType.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction

// interface UserAction {
//     type: string;
//     payload: any;
// }