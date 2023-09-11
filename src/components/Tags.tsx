import React from "react"
import { CATTLE_STATUS, GENDER, ICattleStatus, IGender } from "src/utils"
import { Tag as AntTag } from "antd"
import { twMerge } from "tailwind-merge"

export const Tag = ({ ...props }) => {
  return (
    <AntTag
      {...props}
      className={twMerge(
        "rounded-xl min-w-[50px] text-center",
        props?.className
      )}
    />
  )
}

export const GenderTag = ({
  gender,
  className,
}: {
  gender: IGender
  className?: string
}) => {
  return (
    <Tag
      className={className}
      color={
        gender === "FEMALE" ? "pink" : gender === "MALE" ? "blue" : "default"
      }
    >
      {GENDER?.[gender] || "ไม่มีข้อมูล"}
    </Tag>
  )
}

export const CattleStatusTag = ({
  status,
  className,
}: {
  status: ICattleStatus
  className?: string
}) => {
  const colors: Record<ICattleStatus, string> = {
    BREEDING: "gold",
    GEAVID: "green",
    NON_GEAVID: "red",
    HEIFER: "cyan",
    DRYOFF: "orange",
    CALF: "purple",
  }

  return (
    <Tag className={className} color={colors?.[status] || "default"}>
      {CATTLE_STATUS?.[status] || "ไม่มีข้อมูล"}
    </Tag>
  )
}
