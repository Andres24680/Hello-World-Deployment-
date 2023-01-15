const express = require('express') 
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//index route 
app.get('/', (req, res) => {
    res.send('Hello Class of NYU 04')
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`) )

module.exports= app;