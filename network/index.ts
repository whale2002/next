import { request } from './config'

export const getLayoutData = () => {
  return request.get('/api/layout')
}
