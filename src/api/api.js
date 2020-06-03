import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "35456bd6-92b5-4cd8-8926-ebec929d5303"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`);

    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
}