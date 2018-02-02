import axios from 'axios'
let config = null
if (process.env.NODE_ENV === 'development') {
  config = {
    baseURL: 'https://www.easy-mock.com/mock/5a6c2c167c53635dcf7cf4fe/',
    timeout: 5000
  }
} else {
  config = {
    // baseURL: 'https://www.easy-mock.com/mock/5a6c2c167c53635dcf7cf4fe/',
    baseURL: process.env.baseURL,
    timeout: 5000
  }
}
const service = axios.create(config)
export default service
