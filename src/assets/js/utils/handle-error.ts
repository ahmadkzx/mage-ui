import type { AxiosError } from 'axios'

export default function $handleError(err: Error | AxiosError | unknown) {
  // TODO: handle status codes
  // const statusCode = err.response?.status
  if (err.response?.data?.errors) {
    err.response.data.errors.forEach((error) => window.$message.error(error.message))
  }

  console.error(err)
}
