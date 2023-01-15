const express = require('express') 
const app = express()

//index route 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000)