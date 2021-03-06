import axios, { AxiosError } from 'axios'

const ajax = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Add a request interceptor
ajax.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// Add a response interceptor
ajax.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: AxiosError) {
    if (error.response?.status === 401) {
      window.location.href = '/sign-in'
    }
    return Promise.reject(error)
  },
)

export default ajax
