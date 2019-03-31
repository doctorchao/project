import axios from 'axios'

const fetch = axios.create({
  baseURL: 'https://m.yaojunrong.com/'
})
// 添加响应拦截器
fetch.interceptors.response.use(function (response) {
// 对响应数据做点什么
  return response.data
}, function (error) {
// 对响应错误做点什么
  return Promise.reject(error)
})
// export default 导出整个文件
const str = ''
export {fetch, str}// 导出单个可选择  这里导出两个 在引入时根据需要 没有引入的就不会被打包
