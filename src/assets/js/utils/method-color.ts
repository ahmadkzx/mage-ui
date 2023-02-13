import type { APIMethod } from '@/types/api'

export default function $getMethodColor(method: APIMethod) {
  switch (method) {
    case 'GET':
      return 'info'
    case 'PUT':
      return 'warning'
    case 'POST':
      return 'success'
    case 'DELETE':
      return 'error'
    case 'PATCH':
      return 'tertiary'
    default:
      return 'info'
  }
}
