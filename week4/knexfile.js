// Update with your config settings.
module.exports = {

  development: {
    client: "pg",
    connection: {
      database: 'cohort_db',

    },
    migrations: {
      directory: "./db/migrations"
    }
  },
}