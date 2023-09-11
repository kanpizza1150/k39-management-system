import { LoadingBox } from "app/Loading"
import useRequest from "hooks/useRequest"
import { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import Cattle from "requests/Cattle"
import { Tabs, TabsProps } from "antd"
import { getAge } from "src/utils"
import dayjs from "dayjs"
import { CattleStatusTag } from "components/Tags"
import { PageHeader } from "../Typography"
import BasicInfo from "./BasicInfo"

const Detail = () => {
  const { id } = useParams()

  const { data, fetch, loading } = useRequest()
  useEffect(() => {
    if (id) {
      fetch(Cattle.getById(id))
    }
  }, [id])

  const items: TabsProps["items"] = useMemo(() => {
    return [
      {
        key: "1",
        tabKey: "1",
        label: "ข้อมูลวัว",
        children: <BasicInfo data={data} />,
      },
      {
        key: "2",
        tabKey: "2",
        label: "BBFA",
      },
      {
        key: "3",
        tabKey: "3",
        label: "ลูก",
      },
      {
        key: "4",
        tabKey: "4",
        label: "ประวัติ",
      },
    ]
  }, [data])

  if (loading) {
    return <LoadingBox />
  }
  return (
    <div>
      <PageHeader
        title={data?.name}
        goBack="/"
        extra={<CattleStatusTag status={data?.status} />}
      />
      <Tabs items={items} defaultActiveKey="1" />
    </div>
  )
}

export default Detail
