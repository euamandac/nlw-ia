import { app } from "."

app.get("/summary", (request, response) => {
  response.send("Server on-line")
})
