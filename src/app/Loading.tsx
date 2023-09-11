import { Spin } from "antd"
import React from "react"

export const LoadingBox = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <Spin />
    </div>
  )
}
