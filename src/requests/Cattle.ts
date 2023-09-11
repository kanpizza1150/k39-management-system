import Parse from "parse/dist/parse.min.js"
import { find, get } from "./helper"

const CLASSNAME = "Cattle"

const getAll = () => {
  const query = new Parse.Query(CLASSNAME)
  return find(query)
}
const getById = (objectId: string) => {
  const query = new Parse.Query(CLASSNAME)
  return get(query, objectId)
}

const Cattle = { getAll, getById }
export default Cattle
