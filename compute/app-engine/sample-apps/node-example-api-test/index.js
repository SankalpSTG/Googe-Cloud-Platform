const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Success"
    })
})

app.listen(8080, () => {
    console.log("Working")
})