import axios from 'axios'

const baseURL = 'http://106.12.112.144:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

// 设置请求拦截
axios.interceptors.request.use(config => {
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 登录
export const checkUser = params => {
  return axios.post('login', params).then(res => res.data)
}

// 获取用户列表
export const getUserList = params => {
  return axios.get('users', {params}).then(res => res.data)
}
