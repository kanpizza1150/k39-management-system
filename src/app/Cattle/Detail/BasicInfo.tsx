import { Button, Descriptions, Drawer, Form, Image, Spin } from "antd"
import { renderDescription } from "components/renderer"
import dayjs from "dayjs"
import React, { useMemo, useState } from "react"
import { getAge } from "src/utils"

const BasicInfo = ({ data }) => {
  const [form] = Form.useForm()
  const [openDrawer, setOpenDrawer] = useState(false)
  const dataItems = useMemo(
    () => [
      {
        title: "ข้อมูลพื้นฐาน",
        items: [
          { label: "ชื่อ", value: data.name },
          { label: "Sire", value: data.sire },
          { label: "Dam", value: data.dam },
          { label: "วัน/เดือน/ปี เกิด", value: data.calved },
          { label: "อายุ", value: getAge(dayjs().set("year", 1997)) },
        ],
      },
      {
        title: "แรกเกิด",
        items: [
          { label: "รอบอก", value: data.birthBreast },
          { label: "น้ำหนัก", value: data.birthWeight },
        ],
      },
      {
        title: "หย่านม",
        items: [
          { label: "วัน/เดือน/ปี", value: data.dryDate },
          { label: "รอบอก", value: data.dryBreast },
          { label: "น้ำหนัก", value: data.dryWeight },
          { label: "ความสูงสะโพก", value: data.dryHeight },
        ],
      },
    ],
    [data]
  )
  const handleOnClose = () => {
    setOpenDrawer(false)
  }
  const handleOnOpen = () => {
    setOpenDrawer(true)
  }
  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-10">
      {data?.images?.length && (
        <Image.PreviewGroup items={data?.images}>
          <Image
            src={data?.images[0]}
            className="rounded-lg"
            placeholder={<Spin />}
          />
        </Image.PreviewGroup>
      )}
      <div>
        {renderDescription(dataItems)}
        <Button className="w-full" type="dashed" onClick={handleOnOpen}>
          แก้ไขข้อมูล
        </Button>
      </div>
      <Drawer
        open={openDrawer}
        onClose={handleOnClose}
        placement="bottom"
        size="large"
        title="แก้ไขข้อมูล"
      >
        <Form form={form}></Form>
      </Drawer>
    </div>
  )
}

export default BasicInfo
