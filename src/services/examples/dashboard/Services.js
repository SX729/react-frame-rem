import {
  axios
} from '@/utils'

export function getNumberCardData(params) {
  return axios.get('/api/numberCardData', {
    params: params
  })
}

export function getAnalysisData(params) {
  return axios.get('/api/analysisData', {
    params: params
  })
}
