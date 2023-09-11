import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "app/app"
import("preline")
import Parse from "parse/dist/parse.min.js"
import dayjsDuration from "dayjs/plugin/duration"
import dayjs from "dayjs"
dayjs.extend(dayjsDuration)

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = "wb1yDqKSaDhS7TfsN0W60Z0wCCVhMnrX0wYle5p8"
const PARSE_HOST_URL = "https://parseapi.back4app.com/"
const PARSE_JAVASCRIPT_KEY = "wg4puRBhAoAMCwjVOyDoO2xDTWaa3ht4t2AhRfR3"
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY)
Parse.serverURL = PARSE_HOST_URL

ReactDOM.render(<App />, document.getElementById("root"))
