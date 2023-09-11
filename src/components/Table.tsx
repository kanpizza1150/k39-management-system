import { FC } from "react"
import { Table as AntTable, TableProps } from "antd"
const Table: FC<TableProps<any>> = ({ ...props }) => {
  return <AntTable {...props} scroll={{ x: 600 }} />
}

export default Table
