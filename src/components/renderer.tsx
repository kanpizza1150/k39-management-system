import { Descriptions } from "antd"

export const renderDescription = (items) => {
  return items?.map((d, dIdx) => {
    return (
      <Descriptions
        title={d.title}
        key={`des_${dIdx}`}
        column={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
      >
        {d.items.map((i, iIdx) => {
          return (
            <Descriptions.Item label={i.label} key={`itm_${iIdx}`}>
              {i?.value}
            </Descriptions.Item>
          )
        })}
      </Descriptions>
    )
  })
}
