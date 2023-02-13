import axios from 'axios'

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL:'/api',
  timeout: 50000,
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
  // 将来添加token参数
  return config
})

// 添加响应拦截器
service.interceptors.response.use(
  /* 约束一下response */
  async (response) => {
    // 对响应数据做点什么
    const res = response.data;
      return res; 
  },
  async (error) => {
    // 对响应错误做点什么
  }
)

export default service
