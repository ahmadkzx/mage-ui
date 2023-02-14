import axios from 'axios'
import $handleError from '@/assets/js/utils/handle-error'

export async function APICreateNewAPI(body: object) {
  // TODO: fix $handleError
  try {
    const endpoint = import.meta.env.VITE_SERVER_URL + '/mage/api'

    await axios.post(endpoint, body)
    window.$message.success('API Created Successfully')
  } catch (err) {
    $handleError(err)
  }
}

export async function APIGetAllAPIs() {
  const endpoint = import.meta.env.VITE_SERVER_URL + '/mage/api'

  const {
    data: { data },
  } = await axios.get(endpoint)

  return data
}
