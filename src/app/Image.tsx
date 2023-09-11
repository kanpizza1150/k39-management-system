import React, { FC } from "react"
import { Image as AntImage, ImageProps, Spin } from "antd"
import { twMerge } from "tailwind-merge"
const Image: FC<ImageProps> = (props) => {
  return (
    <AntImage
      {...props}
      className={twMerge("rounded-md", props?.className)}
      placeholder={
        <div className="w-full h-full flex items-center justify-center">
          <Spin />
        </div>
      }
    />
  )
}

export default Image
