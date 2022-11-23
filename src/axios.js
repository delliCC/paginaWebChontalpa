import axios from 'axios'

const baseURL = 'http://localhost/api' // Local
// const baseURL = 'https://www.laboratorioschontalpa.com.mx/api' // production

// configuracion axios
axios.defaults.baseURL = baseURL

// Add a request interceptor
axios.interceptors.request.use(configs => {
  const config = configs
  const user = JSON.parse(window.localStorage.getItem('username')) || null

  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }

  return config
}, error => Promise.reject(error))

export default axios