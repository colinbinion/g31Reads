// Update with your config settings.
require("dotenv").load();

module.exports = {

   development: {
       client: 'postgresql',
       connection: {
           database: process.env.DATABASE_NAME,
           user: process.env.DATABASE_USER,
           password: process.env.DATABASE_PASSWORD
         },

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },
  //
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  //
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
  //
},
};
