import dayjs, { Dayjs } from "dayjs"

export type IGender = "FEMALE" | "MALE"
export const GENDER: Record<IGender, string> = {
  FEMALE: "เมีย",
  MALE: "ผู้",
}

export type ICattleStatus =
  | "GEAVID"
  | "NON_GEAVID"
  | "HEIFER"
  | "CALF"
  | "BREEDING"
  | "DRYOFF"

export const CATTLE_STATUS: Record<ICattleStatus, string> = {
  GEAVID: "ท้อง",
  BREEDING: "ผสมแล้ว",
  NON_GEAVID: "ไม่ท้อง",
  HEIFER: "วัวสาว",
  DRYOFF: "หย่านม",
  CALF: "วัวเด็ก",
}

export const getAge = (calved: Date | Dayjs): string => {
  const calvedDate = calved ? dayjs(calved) : null
  if (calvedDate) {
    const today = dayjs()
    const duration = dayjs.duration(today.diff(calvedDate))
    const days = duration.days()
    const months = duration.months()
    const years = duration.years()
    return `${years ? `${years} ปี ` : ""}${months ? `${months} เดือน ` : ""}${
      days ? `${days} วัน ` : ""
    }`
  } else {
    return ""
  }
}
