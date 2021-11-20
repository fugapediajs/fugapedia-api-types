export interface BaseQuery {
  /**
   * API access key
   */
  key: string

  /**
   * Version of the API
   */
  ver: number
}

export interface BaseResponse {
  result: 'OK' | 'Error'
  message: string
}
