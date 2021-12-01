
exports.up = async function(knex) {
  await knex.schema
    .createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.text('email').notNullable()
      tbl.text('username').notNullable()
      tbl.text('password').notNullable()
    })
    .createTable('saved_cards', tbl => {
      tbl.increments('card_id')
      tbl.text('card_login').notNullable()
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('users')
};
