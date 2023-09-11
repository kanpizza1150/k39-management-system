import Parse from "parse/dist/parse.min.js"
const parseResultObject = (results) => {
  if (Array.isArray(results)) {
    let objs = []
    results.map((obj) => {
      const json = obj.toJSON()
      json.parseObject = obj
      objs.push(json)
    })
    return objs
  } else {
    return results?.toJSON()
  }
}
export const find = async (query: Parse.Query) => {
  const [list, total] = await Promise.all([query.find(), query.count()])
  return {
    total,
    results: parseResultObject(list),
  }
}
export const get = async (query: Parse.Query, objectId: string) => {
  const result = await query.get(objectId)
  return parseResultObject(result)
}
