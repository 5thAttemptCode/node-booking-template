const { Pool } = require("pg")
console.log('DATABASE_URL:', process.env.DATABASE_URL);
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

// Ask pool for a client (db connection)
pool.connect()
  // If successful, run code with the db client
  .then(client => {
    return client
      // Run a test query to check db is alive
      .query("SELECT NOW()")
      .then(res => {
        console.log("PostgreSQL connected: ", res.rows[0])
        // Release client for reuse!!
        client.release()
      })
      .catch(err => {
        client.release()
        console.error("Error testing PostgreSQL connection", err.stack)
      })
  })

module.exports = pool