const express = require('express') 
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//index route 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`) )

module.exports= app;