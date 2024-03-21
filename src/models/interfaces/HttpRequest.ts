type methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS'

export interface HttpRequest {
  url: string
  params?: ParamsRequest
  body?: any
  method?: methods
  take?: number
  page?: number
  token?: string
  webBuilderApiKey?: string
}

export interface ParamsRequest {
  where?: any
  relations?: Array<string> | string
  take?: number
  page?: number
}

export interface PaginationServer {
  currentPage: number
  elementsPerPage: number
  firstPage: number
  nextPage: number
  prevPage: number
  totalElements: number
}
