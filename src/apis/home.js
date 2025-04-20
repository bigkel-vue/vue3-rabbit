import httpInstance from "@/utils/http.js";

export function getBannerApi(param={}) {
    // param不传时，就是是空对象，解构时distributionSite的值就是"1"，达到设置默认值的效果
    const {distributionSite = '1'} = param
    return httpInstance({
        url:"home/banner",
        params:{
            distributionSite
        }
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