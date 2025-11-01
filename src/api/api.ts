import axios from "axios";

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const apiKey = {'API-KEY':'7643462e-f1ca-4ac7-ab74-2b96553fe0b2'}

const instance = axios.create({
    withCredentials: true,
    headers: apiKey,
    baseURL: baseUrl,
});

export const usersAPI = {

    async getUsers(pageNumber: number, pageSize: number) {
        const res = await instance.get(`users?page=${pageNumber}&count=${pageSize}`);
        return res.data;
    },

    follow(id: any) {return instance.post(`follow/${id}`, {})},

    unFollow(id: any) {return instance.delete(`follow/${id}`, {})},

    getProfile(id: any) {
        console.warn('Obsolete method. Please use profileAPI instead');
        return profileAPI.getProfile(id);
    }
}

export const authAPI = {
    authMe() {return instance.get(`auth/me`, {})},
}

export const profileAPI = {
    getProfile(id: any) {return instance.get(`profile/${id}`, {})},

    getStatus(id: any) {return instance.get(`profile/status/${id}`, {})},

    updateStatus(status: string) {return instance.put(`profile/status/`, {status})},
}