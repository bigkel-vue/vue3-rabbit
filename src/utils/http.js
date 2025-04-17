import axios from "axios";

const httpInstance = axios.create({
    baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout:5000
});

// 请求拦截器
httpInstance.interceptors.request.use(
    (config) => {
        // 在发送请求前修改配置（如添加 Token）
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 处理请求错误（如网络错误）
        return Promise.reject(error);
    }
);

// 响应拦截器
httpInstance.interceptors.response.use(
    (response) => {
        // 对响应数据统一处理（如提取核心数据）
        return response.data;
    },
    (error) => {
        // 统一处理 HTTP 错误（如 401、404、500）
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.error('未授权，请重新登录');
                    break;
                case 404:
                    console.error('请求资源不存在');
                    break;
                case 500:
                    console.error('服务器错误');
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default httpInstance
