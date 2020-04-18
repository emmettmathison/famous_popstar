const express = require('express')
const PORT = process.env.PORT || 5000
const path = require("path")

express()
  .use(express.static(path.join(__dirname, 'client')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
