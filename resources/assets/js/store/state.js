
import { getLocalUser } from '../helpers/auth';

const user = getLocalUser();
export const state =  {
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null,
    userList: [],
}