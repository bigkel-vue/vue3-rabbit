import httpInstance from "@/utils/http.js";

export const getDetailApi = (id) => {
    return httpInstance({
        url: '/goods',
        params: {
            id
        }
    })
}