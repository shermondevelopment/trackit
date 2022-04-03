import { AxiosRequestHeaders } from 'axios'

const user =
  localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') || '')

const headers: AxiosRequestHeaders = {
  Authorization: `Bearer ${user?.token}`,
}

export default headers
