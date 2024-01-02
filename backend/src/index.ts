import app from './app.js'
import { connectToDatabase, disconnectFromDatabase } from './db/connection.js'

//connections and listeners
const PORT = process.env.PORT || 5000
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log('database successfully connected here'))
  })
  .catch((err) => console.log(err));
