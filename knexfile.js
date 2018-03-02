// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/ny-resolutions"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

}
