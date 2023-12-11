const express = requires ('express')
const app = express ()
const db = require ('./queries')
const PORT = 9001

app.get('/' , (req , res) => {

    res.send("Testing from the server")
})

app.listen(PORT, () => {
    console.log("The app is running on port ${PORT}.")
})