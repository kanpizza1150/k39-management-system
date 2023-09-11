import Table from "components/Table"
import useRequest from "hooks/useRequest"
import { useEffect, useMemo, useState } from "react"
import Cattle from "requests/Cattle"
import { CATTLE_STATUS, GENDER, ICattleStatus, IGender } from "../../utils"
import { CattleStatusTag, GenderTag } from "components/Tags"
import { Card, Space, Statistic, StatisticProps } from "antd"
import { useNavigate } from "react-router-dom"
const columns = [
  { title: "ชื่อ", dataIndex: "name" },
  { title: "Sire", dataIndex: "sire" },
  { title: "Dam", dataIndex: "dam" },
  {
    title: "เพศ",
    dataIndex: "gender",
    render: (val: IGender) => <GenderTag gender={val} />,
  },
  {
    title: "สถานะ",
    dataIndex: "status",
    render: (val: ICattleStatus) => <CattleStatusTag status={val} />,
  },
]
const List = () => {
  const navigate = useNavigate()
  const { data, fetch, loading } = useRequest()

  useEffect(() => {
    fetch(Cattle.getAll())
  }, [])

  const counts = useMemo(() => {
    const statusItems: StatisticProps[] = []
    const genderItem: StatisticProps[] = []
    const count: Partial<Record<IGender | ICattleStatus, number>> = {}

    data?.results?.forEach((d) => {
      Object.keys(CATTLE_STATUS).forEach((key) => {
        if (d.status === key) {
          count[key as ICattleStatus] = (count?.[key as ICattleStatus] || 0) + 1
        }
      })
      Object.keys(GENDER).forEach((key) => {
        if (d.gender === key) {
          count[key as IGender] = (count?.[key as IGender] || 0) + 1
        }
      })
    })

    Object.keys(CATTLE_STATUS).forEach((key) => {
      statusItems.push({
        title: (
          <CattleStatusTag status={key as ICattleStatus} className="m-0" />
        ),
        value: count?.[key] || 0,
        loading,
      })
    })
    Object.keys(GENDER).forEach((key) => {
      genderItem.push({
        title: <GenderTag gender={key as IGender} className="m-0" />,
        value: count?.[key] || 0,
        loading,
      })
    })

    return (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          {genderItem.map((i, idx) => (
            <Card key={idx} bodyStyle={{ padding: "0.8rem" }}>
              <Statistic
                {...i}
                className="flex justify-center items-center flex-col"
              />
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-6 gap-3 ">
          {statusItems.map((i, idx) => (
            <Card key={idx} bodyStyle={{ padding: "0.8rem" }}>
              <Statistic
                {...i}
                className="flex justify-center items-center flex-col"
              />
            </Card>
          ))}
        </div>
      </div>
    )
  }, [loading, data])
  return (
    <Space direction="vertical">
      {counts}
      <Table
        columns={columns}
        dataSource={data?.results}
        loading={loading}
        onRow={(record) => ({
          onClick: () => navigate(`/${record?.objectId}`),
        })}
      />
    </Space>
  )
}

export default List
