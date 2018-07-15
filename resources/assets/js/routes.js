import Home from "./components/Home";

import Users from "./components/users/Users";
import UserList from "./components/users/UserList";
import UserDetail from "./components/users/UserDetail";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MyAccount from "./components/auth/MyAccount";

import NotFound from "./components/shared/NotFound";

export default [
    {
        path: "/",
        name: "index",
        component: Home,
        meta: {}
    },
    {
        path: "/users",
        name: "users",
        component: Users,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: "/",
                component: UserList
            },
            {
                path: ":email",
                name: "userdetail",
                component: UserDetail
            }
        ]
    },
    {
        path: "/profile",
        name: "profile",
        component: MyAccount,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {}
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {}
    },
    { path: "*", component: NotFound }
];
