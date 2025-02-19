const express = require('express')
const app = express()

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json())


const port = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(port , console.log(`Server is listening ${port} . . .`))
    } catch (error) {
        console.log(error)        
    }
}

start()


