import fetch from '@/util/fetch.js'

export function getList (data) {
  return fetch({
    url: '/words',
    method: 'GET',
    params: data
  })
}
export function postComment (data) {
  return fetch({
    url: '/word',
    method: 'POST',
    data
  })
}
