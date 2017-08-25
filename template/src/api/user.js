import axios from 'axios'
import qs from 'qs'
let server = ''
export function login (user) {
  let url = server + '/login'
  return axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: url,
    data: qs.stringify(user) // php x-www-form-urlencoded
  }).then((res) => {
    return res.data
  })
}
export function logout () {
  let url = server + '/action/auth.logout'
  return axios({
    method: 'get',
    url: url
  })
}
