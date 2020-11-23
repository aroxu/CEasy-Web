import Axios from 'axios'
export const GetData = (
  reqLimit,
  reqArea,
  reqAreaDetail,
  reqStart,
  reqEnd,
  reqIncludes,
  reqOffset
) =>
  Axios.get('https://alt.b1ackange1.me/api/cbs/v0/', {
    params: {
      limit: `${reqLimit === undefined ? '' : reqLimit}`,
      area: `${reqArea === undefined ? '' : reqArea}`,
      area_detail: `${reqAreaDetail === undefined ? '' : reqArea}`,
      start: `${reqStart === undefined ? '' : reqArea}`,
      end: `${reqEnd === undefined ? '' : reqArea}`,
      includes: `${reqIncludes === undefined ? '' : reqArea}`,
      offset: `${reqOffset === undefined ? '' : reqArea}`
    }
  })
