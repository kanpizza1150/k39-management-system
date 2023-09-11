import {
  Button,
  Image as AntImage,
  Drawer,
  Form,
  InputNumber,
  Select,
  DatePicker,
  Space,
  Card,
} from "antd"
import Image from "app/Image"
import { CancelButton, SaveButton } from "components/Buttons"
import { renderDescription, renderFormItem } from "components/renderer"
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
          { label: "ชื่อ", value: data.name, name: "name" },
          { label: "Sire", value: data.sire, name: "sire", comp: <Select /> },
          { label: "Dam", value: data.dam, name: "dam", comp: <Select /> },
          {
            label: "วัน/เดือน/ปี เกิด",
            value: data.calved,
            name: "calved",
            comp: <DatePicker className="w-full" />,
          },
          {
            label: "อายุ",
            value: getAge(dayjs().set("year", 1997)),
            name: "age",
            comp: <p>{getAge(dayjs().set("year", 1997))}</p>,
            formHide: true,
          },
        ],
      },
      {
        title: "แรกเกิด",
        items: [
          {
            label: "รอบอก",
            value: data.birthBreast,
            name: "birthBreast",
            comp: <InputNumber suffix={"cm"} className="!w-full" />,
          },
          {
            label: "น้ำหนัก",
            value: data.birthWeight,
            name: "birthWeight",
            comp: <InputNumber suffix={"kg"} className="!w-full" />,
          },
        ],
      },
      {
        title: "หย่านม",
        items: [
          {
            label: "วัน/เดือน/ปี",
            value: data.dryDate,
            name: "dryDate",
            comp: <DatePicker className="w-full" />,
          },
          {
            label: "รอบอก",
            value: data.dryBreast,
            name: "dryBreast",
            comp: <InputNumber suffix={"cm"} className="!w-full" />,
          },
          {
            label: "น้ำหนัก",
            value: data.dryWeight,
            name: "dryWeight",
            comp: <InputNumber suffix={"kg"} className="!w-full" />,
          },
          {
            label: "ความสูงสะโพก",
            value: data.dryHeight,
            name: "dryHeight",
            comp: <InputNumber suffix={"cm"} className="!w-full" />,
          },
        ],
      },
    ],
    [data]
  )
  const handleOnClose = () => {
    setOpenDrawer(false)
  }
  const handleOnSave = async () => {
    const values = await form.validateFields()
    handleOnClose()
  }
  const handleOnOpen = () => {
    setOpenDrawer(true)
    form.setFieldsValue(data)
  }
  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-10">
      {data?.images?.length && (
        <AntImage.PreviewGroup items={data?.images}>
          <Image src={data?.images[0]} className="rounded-lg" />
        </AntImage.PreviewGroup>
      )}
      <div className="flex flex-col gap-3">
        {/* <Alert type="warning" showIcon message={"xx"} description="x" /> */}
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
        extra={
          <Space>
            <CancelButton onClick={handleOnClose} />
            <SaveButton onClick={handleOnSave} />
          </Space>
        }
      >
        <Form form={form} layout="vertical">
          <Space direction="vertical" className="w-full">
            <Card title={dataItems[0].title}>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                {renderFormItem(dataItems[0].items)}
              </div>
            </Card>
            <Card title={dataItems[1].title}>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                {renderFormItem(dataItems[1].items)}
              </div>
            </Card>
            <Card title={dataItems[2].title}>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                {renderFormItem(dataItems[2].items)}
              </div>
            </Card>
          </Space>
        </Form>
      </Drawer>
    </div>
  )
}

export default BasicInfo
