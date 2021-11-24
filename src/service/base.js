import axios from 'axios'

const ERR_OK = 0
// 开发环境是根路径，线上可能会变
const baseURL = '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const serverData = res.data
      if (serverData.code === ERR_OK) {
        return serverData.result
      }
    }).catch((e) => {
      console.log(e)
    })
  }
