import express from "express"

import { AddressInfo } from "net"
import { PORT } from "./config"

const api = express()

const server = api.listen(PORT, "127.0.0.1", () => {
  const { port, address } = server.address() as AddressInfo

  console.log("\n| API BLOG | Listening on:", "http://" + address + ":" + port + " |")
})
