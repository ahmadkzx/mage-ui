export default function $isJson(str: string) {
  try {
    JSON.parse(str)
  } catch (err) {
    return false
  }

  return true
}
