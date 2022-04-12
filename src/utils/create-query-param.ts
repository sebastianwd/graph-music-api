import { keys } from 'lodash'

interface QueryParams {
  [key: string]: string | number | boolean | undefined
}

const createQueryParam = (param: QueryParams) => {
  const [key] = keys(param)

  const value = param[key]

  if (!value) {
    return ''
  }

  return `&${key}=${encodeURIComponent(value)}`
}

export default createQueryParam
