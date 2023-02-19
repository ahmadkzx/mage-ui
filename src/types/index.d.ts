export type APIMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface API {
  id: number
  name: string
  data: string
  route: string
  description: string | null
  method: APIMethod
}

export interface Schema {
  id: number
  name: string
  data: string
}
