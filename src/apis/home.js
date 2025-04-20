import httpInstance from "@/utils/http.js";

export function getBannerApi() {
    return httpInstance({
        url:"home/banner"
    })
}

// 定义函数的两种方式
export const findNewApi = () => {
    return httpInstance({
        url:"home/new"
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return  httpInstance.get('home/hot')
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}