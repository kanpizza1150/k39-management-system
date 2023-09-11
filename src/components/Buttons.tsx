import { Button, ButtonProps } from "antd"
import React, { FC } from "react"

export const SaveButton: FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="primary">
      บันทึก
    </Button>
  )
}
export const CancelButton: FC<ButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>ยกเลิก</Button>
}
