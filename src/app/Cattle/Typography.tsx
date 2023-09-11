import { Button, Divider } from "antd"
import ICONS from "components/icons"
import React, { FC } from "react"
import { useNavigate } from "react-router-dom"

interface PageHeaderProps {
  title?: string
  subTitle?: string
  description?: string | JSX.Element
  goBack?: string
  extra?: JSX.Element
}
export const PageHeader: FC<PageHeaderProps> = ({
  title,
  subTitle,
  description,
  goBack,
  extra,
}) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {goBack && (
            <Button
              icon={ICONS.left}
              shape="circle"
              onClick={() => navigate(goBack)}
            />
          )}
          <div className="flex flex-col gap-2">
            {title && (
              <h1 className="p-0 m-0 font-semibold text-2xl">{title}</h1>
            )}
            {subTitle && (
              <h2 className="p-0 m-0 font-medium text-xl">{subTitle}</h2>
            )}
            {description &&
              (typeof description === "string" ? (
                <p className="p-0 m-0 text-sm text-gray-600">{description}</p>
              ) : (
                description
              ))}
          </div>
        </div>
        {extra && extra}
      </div>
      <Divider />
    </>
  )
}
