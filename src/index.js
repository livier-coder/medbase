import app from './app.js'
import {PORT} from './config.js'

//Start server of the app
app.listen(PORT)
console.log('Server on port', PORT);