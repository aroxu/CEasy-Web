import Axios from 'axios'

interface ICbsDataRequest {
  limit?: string
  area?: string
  area_detail?: string
  start?: string
  end?: string
  includes?: string
  offset?: string
}

export const GetData = (params: ICbsDataRequest) =>
  Axios.get('https://alt.aroxu.me/api/cbs/v0/', {
    params
  })
