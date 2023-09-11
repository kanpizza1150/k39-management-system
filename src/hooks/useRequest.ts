import { useState } from "react"
export interface IReturnRequest {
  data: any
  loading: boolean
  error: boolean
  fetch: (callback: any) => any
}
const useRequest = (): IReturnRequest => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const fetch = async (callbak: any) => {
    setLoading(true)
    setError(false)

    try {
      const res = await callbak
      setData(res)
    } catch (e) {
      console.log("e", e)
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  return {
    data,
    loading,
    error,
    fetch,
  }
}

export default useRequest
