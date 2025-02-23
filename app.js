const express = require('express')
const app = express()
const sendEmailEthereal = require('./controller/sendEmail');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json())

app.get('/send' , sendEmailEthereal)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(port , console.log(`Server is listening ${port} . . .`))
    } catch (error) {
        console.log(error)        
    }
}

start()


