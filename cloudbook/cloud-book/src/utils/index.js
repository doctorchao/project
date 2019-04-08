import axios from 'axios'

const fetch = axios.create({
  // baseURL: 'https://m.yaojunrong.com/'
  baseURL: process.env.BASE_URL
})
// 添加响应拦截器
fetch.interceptors.response.use(function (response) {
// 对响应数据做点什么
  return response.data
}, function (error) {
// 对响应错误做点什么
  return Promise.reject(error)
})
fetch.interceptors.request.use(config => {
  let token = localStorage.getItem('token')
  if(token) {
    config.headers.token = token
    return config
  } else {
    return config
  }
},err => Promise.reject(err))
// export default 导出整个文件
const str = ''
export {fetch, str}// 导出单个可选择  这里导出两个 在引入时根据需要 没有引入的就不会被打包
